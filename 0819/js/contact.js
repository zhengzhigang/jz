$(document).ready(function(){
    var zWaterfall = {
        left: $('.waterfall_left'),
        right: $('.waterfall_right'),
        list: [],
        columnHeight: [0, 0],
        columnData: [],
        offset: 0,
        loading: false,
        // 节流
        throttle: function(fn, delay) {
            let timer
            let isFirstTime = true
            return function () {
            let context = this
            let args = arguments
        
            if (isFirstTime) {
                fn.apply(context, args)
                isFirstTime = false
                return
            }
        
            if (timer) return
        
            timer = true
            setTimeout(function () {
                fn.apply(context, args)
                timer = false
            }, delay)
            }
        },
        getScrollTop: function(element) {
            return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
        },
        getVisibleHeight: function(element) {
            return element === window
                ? element.innerHeight
                : element.getBoundingClientRect().height
        },
        scroll: function(options) {
            this.offset = options.offset || 0
            this.callback = options.callback
            this.initScroll()
            setTimeout(function() {
                this.scrollHandler()
            }.bind(this))
            return this
        },
        initScroll: function() {
            window.addEventListener('scroll', this.throttle(this.scrollHandler.bind(this), 500))
        },
        scrollHandler: function() {
            if (this.loading) return
            if (this.judgeScroll()) {
                this.loading = true
                this.callback()
                setTimeout(function() {
                    this.loading = false
                }.bind(this))
            }
        },
        judgeScroll: function() {
            var scrollTop = this.getScrollTop(window)
            var scrollerHeight = this.getVisibleHeight(window)
            var targetBottom = scrollTop + scrollerHeight
            var docHeight = document.body.scrollHeight || document.documentElement.scrollHeight
            if (scrollTop + scrollerHeight + this.offset >= docHeight) {
                return true
            }
            return false
        },
        judgeType: function(v) {
            return Object.prototype.toString.call(v)
        },
        load: function(data) {
            if (this.judgeType(data) !== '[object Array]') {
                throw Error('data应该是一个数组')
                return
            }

            if (!data.length) {
                return
            }
            this.render(data)
        },
        calcHeight() {

        },
        render: function(data) {
            for (var i = 0; i < data.length; i++) {
                var haml = this.createHtml(data[i])
                var leftHeight = this.left[0].offsetHeight
                var rightHeight = this.right[0].offsetHeight
                if (rightHeight < leftHeight) {
                    this.right.append(haml)
                } else {
                    this.left.append(haml)
                }
            }
        },
        createHtml: function(item) {
            var list = item.list
            var tr = ''
            for (var i = 0; i < list.length; i++) {
                tr += '<tr><td>' + list[i].school + '</td><td>' + list[i].qq + '</td></tr>'
            }

            var haml = '<div class="waterfall-item">' +
                        '<p class="waterfall-item-title">' + item.city + '</p>' +
                        '<table class="item-table">' +
                        '<thead>' +
                            '<tr class="table-head-tr">' +
                            '<th>学校</th>' +
                            '<th>QQ群号</th>' +
                            '</tr>' +
                        '</thead>' +
                        '<tbody>' + tr +
                        '</tbody>' +
                        '</table>' +
                    '</div>'

            return haml
        }
    }

    var data = [
        {
            city: '北京市1',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市2',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市3',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市4',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市5',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市6',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市7',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市8',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市9',
            list: [
                {school: '北京邮电大学', qq: '10987090'}
            ]
        },
        {
            city: '北京市10',
            list: [
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'},
                {school: '北京邮电大学', qq: '10987090'}
            ]
        }
    ]

    var zwaterfall = zWaterfall.scroll({
        // 距离页面底部offset时开始加载数据
        offset: 50,
        // 节流延时 默认200
        throttleDelay: 200,
        callback: function() {
            // 滚动到指定位置回调
            // 调用load方法，传入数据
            zwaterfall.load(data)
        }
    })
})
