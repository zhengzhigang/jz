/*
 * =====================================================
 * @name        scrollspy.js
 * @author      Zhengzhigang
 * @dependency  jQuery
 * =====================================================
 */

!function(root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory();
        });
    } else if (typeof module != 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        window[root] = factory();
    }
}('Scrollspy', function() {

    'use strict';

    Scrollspy.VERSION = '1.0.0';

    Scrollspy.DEFAULT = {
        scrollElement: window,
        offset:        10,
        selector:      '.nav a',
        activeCls:     'active'
    }

    //Scrollspy constructor
    //=====================
    function Scrollspy(options) {
        this.options = $.extend(Scrollspy.DEFAULT, options || {});
        this.$body = $(document.body);
        this.$scrollElement = $(this.options.scrollElement);
        this.selector = this.options.selector;
        this.activeCls = this.options.activeCls;
        this.activeTarget = null;
        this.targets = [];
        this.offsets = [];
        this.scrollHeight = 0;

        this.$scrollElement.on('scroll', $.proxy(this.process, this));
        this.refresh();
        this.process();
    }

    //return the listening element's scroll height
    //============================================
    Scrollspy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }

    //(re)set the params and status
    //=============================
    Scrollspy.prototype.refresh = function() {
        var self = this;

        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();

        this.$body
        .find(this.selector)
        .map(function() {
            var $el = $(this);
            var href = $el.attr('href');
            var $href = /^#./.test(href) && $(href);

            return ($href && $href.length && $href.is(':visible') && [[$href.offset().top, href]]) || null;
        })
        .each(function() {
            self.offsets.push(this[0]);
            self.targets.push(this[1]);
        });

    }

    //init the params and init the events
    //===================================
    Scrollspy.prototype.process = function() {
        var offsets = this.offsets;
        var targets = this.targets;
        var scrollTopOrigin = this.$scrollElement.scrollTop();
        var scrollTop = scrollTopOrigin + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var activeTarget = this.activeTarget;
        var tmp;

        //get the scrolling direction
        //page resize or other reasons make
        //the scrollElement's scrollHeight change,
        //then refresh to update
        if (this.scrollHeight != scrollHeight) {
            this.refresh();
        }

        //scrollElement has scroll to max,
        //if the active target is not the last
        //one, then set it to active
        if (scrollTop >= maxScroll) {
            activeTarget != (tmp = targets[targets.length - 1]) && this.activate(tmp);
            return;
        }

        //scrollElement has scroll out min,
        //set the activeTarget to null and remove active class
        if (activeTarget && scrollTop <= offsets[0]) {
            this.activeTarget = null;
            this.clear();
        }
        for (var i = offsets.length; i--;) {
            activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
            && this.activate(targets[i]);
        }
    }

    //update the active target
    //========================
    Scrollspy.prototype.activate = function(target) {
        this.activeTarget = target;
        this.clear();

        $(this.selector + '[href="' + target + '"]').addClass(this.activeCls);
        this.options.reachActive(target)
    }

    //clear the active status
    //=======================
    Scrollspy.prototype.clear = function() {
        $(this.selector + '.' + this.activeCls).removeClass(this.activeCls);
    }

    return Scrollspy;

});