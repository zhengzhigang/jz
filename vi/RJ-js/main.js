var PAGE = {
    sidebarData: [
        {
            name: '锐捷网络品牌视觉规范',
            icon: 'side-icon-01.png',
            second: [
                {
                    name: '品牌基础核心元素',
                    title: '基础',
                    third: [
                        {name: '锐捷策略与表现策略'},
                        {name: 'logo'},
                        {name: '字体'},
                        {name: '色彩'},
                        {name: '栅格板式'},
                        {name: '影像风格'},
                        {name: '辅助图形'},
                        {name: '图标'}

                    ]
                },
                {
                    name: '宣传品视觉规范',
                    title: '宣传品',
                    third: [
                        {name: '宣传总揽与基础栅格'},
                        {name: '品牌画册/刊物'},
                        {name: '产品/行业解决方案折页/集'},
                        {name: '产品/行业案例集'},
                        {name: '产品彩页'},
                        {name: '产品技术白皮书'},
                        {name: '产品索引'},

                    ]
                },
                {
                    name: '活动视觉规范',
                    title: '活动',
                    third: [
                        {name: '大活动主视觉调性与构成'},
                        {name: '延展物料总揽'},
                        {name: '主视觉背板'},
                        {name: '指示牌'},
                        {name: '胸卡'},
                        {name: '欢迎贺卡'},
                        {name: '桌签'},

                        {name: '车证'},
                        {name: '接机牌'},
                        {name: '邀请函'},
                        {name: '电子邀请函'},
                        {name: '易拉宝'},
                        {name: '主持人手卡'},
                        {name: '抽奖箱'},
                        {name: '抽奖券'},
                        {name: '参观指南'},
                        {name: '展板'},
                        {name: 'ppt模板'},
                        {name: '串场ppt'},
                        {name: '话筒贴'},
                        {name: '台卡签到处'},
                        {name: '椅背贴'},
                        {name: '议程指示牌'},

                        {name: '会议h5邀请函'},
                        {name: '讲台贴'},
                        {name: '条幅'},
                        {name: '颁奖kt板'},
                        {name: '签到表'},
                        {name: '倒计时提醒牌'},
                        {name: '签到背板'},



                    ]
                },
                {
                    name: '线上活动视觉规范',
                    title: '线上活动',
                    third: [
                        {name: '主视觉风格调性与元素拆分'},
                        {name: '主题微信海报'},
                        {name: '主题微信长图及邀请函'},
                        {name: 'pc端专题页设计'},
                        {name: '移动端专题页设计'},
                        {name: '微吼发布页面'},
                        {name: 'PPT模板'},

                    ]
                },
                {
                    name: '办公视觉规范',
                    title: '办公',
                    third: [
                        {name: '办公物料总揽'},
                        {name: '名片'},
                        {name: '工牌'},
                        {name: 'DL信封'},
                        {name: '5号信封'},
                        {name: '7号信封'},
                        {name: '9号信封'},
                        {name: '纸杯'},
                        {name: '邀请函'},
                        {name: '授权书'},
                        {name: '邮件签名'},
                        {name: 'WORD模板'},
                        {name: '行政立牌'},
                        {name: '桌面立牌'},
                        {name: '桌面贴签'},
                        {name: '制度管理'},
                        {name: 'EDM'},
                        {name: '外部采购'},
                        {name: '纸袋'},
                        {name: '帆布袋'},
                        {name: '透明手提袋'},
                        {name: '前台背景墙'},
                        {name: '玻璃门防撞条'},
                        {name: '警示标语'},
                        {name: '温馨提示'},
                        {name: '门牌/部门牌'},
                        {name: '6s海报'}
                    ]
                },
                {
                    name: '网站视觉规范',
                    title: '网站',
                    third: [
                        {name: '网站页面基础元素与调性'},
                        {name: '首页'},
                        {name: '产品页面'},
                        {name: '产品方案详情页'},
                        {name: '行业线首页'},
                        {name: '行业方案详情页'}
                    ]
                },
                {
                    name: '移动海报视觉规范',
                    title: '移动',
                    third: [
                        {name: '移动海报总览与界面尺寸'},
                        {name: '品牌案例海报'},
                        {name: '品牌服务海报'},
                        {name: '品牌业绩海报'},
                        {name: '产品品牌海报'},
                        {name: '产品介绍海报'},
                        {name: '产品方案海报'},
                        {name: '产品业绩海报'},
                        {name: '行业介绍海报'},
                        {name: '行业方案海报'},
                        {name: '行业案例海报'},
                        {name: '节日实践'},
                        {name: '活动海报'},
                        {name: '微信插图'},
                        {name: '裂变海报'},
                        {name: 'H5邀请函标注'}
                    ]
                },
                {
                    name: '媒体投放图片视觉规范',
                    title: '媒体',
                    third: [
                        {name: '媒体宣传图片类型总览'},
                        {name: 'pc端首页样式'},
                        {name: 'PC端样式'},
                        {name: '移动端样式'},
                        {name: '外部投放广告图画面调性'},
                        {name: '月度媒体投放广告'}
                    ]
                }
            ]
        },
        {
            name: 'Reyee品牌视觉规范',
            icon: 'side-icon-02.png',
            second: []
        },
        {
            name: 'Ragial品牌视觉规范',
            icon: 'side-icon-03.png',
            second: []
        }
    ],
    init: function() {
        console.time('cerate sidebar:')
        this.initSidebar();
        console.timeEnd('cerate sidebar:')
        this.initSidebarEvent()
    },
    initSidebar: function() {
        var sidebar = $('.sidebar-list');
        var str = ''
        var d = this.sidebarData
        for (var i = 0, len = d.length; i < len; i++) {
            str += '<li class="sidebar-list-item">' +
                        '<img class="icon" src="./RJ-img/'+ d[i].icon +'" />' +
                        '<span class="sidebar-text">'+ d[i].name +'</span>' +
                        this.getSecondStr(d[i].second || []) +
                    '</li>'
        }
        sidebar.html(str)
    },
    getSecondStr: function(list) {
        if (!list.length) {
            return ''
        }
        var str = '';
        for (var i = 0, len= list.length; i < len; i++) {
            str += '<li class="sub-list-item">' +
                        '<span class="sub-text">'+ list[i].name +'</span>' +
                        this.getThirdStr(list[i].third || []) +
                    '</li>';
        }
        return '<ul class="sub-list">' + str + '</ul>'
    },
    getThirdStr: function(list) {
        if (!list.length) {
            return ''
        }
        var str = '';
        for (var i = 0, len = list.length; i < len; i++) {
            str += '<li class="third-list-item">' +
                        '<span class="third-text">'+ list[i].name +'</span>' +
                    '</li>';
        }
        return '<ul class="third-list">' + str + '</ul>';
    },
    initSidebarEvent: function() {
        var _this = this;
        $('.sidebar-text').on('click', function() {
            var parent = $(this).parent('.sidebar-list-item');
            parent.siblings().removeClass('active');
            _this.setElStatus(parent);
        })

        $('.sub-text').on('click', function() {
            var parent = $(this).parent('.sub-list-item');
            _this.setElStatus(parent);
        })

        $('.third-text').on('click', function() {
            var parent = $(this).parent('.third-list-item');
            var parents = $(this).parents('.sub-list-item ');
            var pParents = $(this).parents('.sidebar-list-item');
            if (!parent.hasClass('active')) {
                parent.siblings().removeClass('active');
                parents.siblings().find('.third-list-item').removeClass('active');
                pParents.siblings().find('.third-list-item').removeClass('active');
                parent.addClass('active');
            }
        })
    },
    setElStatus: function(parent) {
        if (parent.hasClass('active')) {
            parent.removeClass('active');
        } else {
            parent.addClass('active');
        }
    }
}

$(function() {
    PAGE.init()
})