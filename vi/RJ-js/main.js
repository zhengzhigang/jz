var PAGE = {
    timer: null,
    wWidth: 1920,
    sidebarData: [
        {
            name: '锐捷网络品牌视觉规范', // 一级目录名称
            icon: 'side-icon-01.png', // 一级目录icon
            second: [
                {
                    name: '品牌基础核心元素', // 二级目录名称
                    f: '1/1',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/基础.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件(总)/基础.zip?_upd=true',
                    third: [
                        {
                            name: '锐捷策略与表现策略', // 三级目录名称
                            length: 12,   // 三级目录页数
                            target: '1-1-1',  // 菜单锚点目标id
                            download: ''
                        },
                        {
                            name: 'logo',
                            length: 9,
                            target: '1-1-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/logo.zip?_upd=true'
                        },
                        {
                            name: '字体',
                            length: 2,
                            target: '1-1-3',
                            download: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/12644'
                        },
                        {
                            name: '色彩',
                            length: 4,
                            target: '1-1-4',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/色彩.zip?_upd=true'
                        },
                        {
                            name: '栅格板式',
                            length: 3,
                            target: '1-1-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/栅格板式.zip?_upd=true'
                        },
                        {
                            name: '影像风格',
                            length: 9,
                            target: '1-1-6',
                            download: ''
                        },
                        {
                            name: '辅助图形',
                            length: 6,
                            target: '1-1-7',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/辅助图形.zip?_upd=true'
                        },
                        {
                            name: '图标',
                            length: 4,
                            target: '1-1-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/图标.zip?_upd=true'
                        }

                    ]
                },
                {
                    name: '宣传品视觉规范',
                    f: '1/2',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/宣传品.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/宣传品.zip?_upd=true',
                    third: [
                        {
                            name: '宣传总揽与基础栅格',
                            length: 4,
                            target: '1-2-1',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/总览.zip?_upd=true'
                        },
                        {
                            name: '品牌画册/刊物',
                            length: 7,
                            target: '1-2-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/品牌画册:刊物.zip?_upd=true'
                        },
                        {
                            name: '产品/行业解决方案折页/集',
                            length: 5,
                            target: '1-2-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品行业解决方案折页集.zip?_upd=true'
                        },
                        {
                            name: '产品/行业案例集',
                            length: 15,
                            target: '1-2-4',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品行业案例集.zip?_upd=true'
                        },
                        {
                            name: '产品彩页',
                            length: 4,
                            target: '1-2-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品彩页.zip?_upd=true'
                        },
                        {
                            name: '产品技术白皮书',
                            length: 5,
                            target: '1-2-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品技术白皮书.zip?_upd=true'
                        },
                        {
                            name: '产品索引',
                            length: 3,
                            target: '1-2-7',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品索引.zip?_upd=true'
                        },

                    ]
                },
                {
                    name: '活动视觉规范',
                    f: '1/3',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/活动.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/活动.zip?_upd=true',
                    third: [
                        {
                            name: '大活动主视觉调性与构成',
                            length: 6,
                            target: '1-3-1',
                            download: ''
                        },
                        {
                            name: '延展物料总揽',
                            length: 2,
                            target: '1-3-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/活动总览.zip?_upd=true'
                        },
                        {
                            name: '主视觉背板',
                            length: 3,
                            target: '1-3-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/主视觉背板.zip?_upd=true'
                        },
                        {
                            name: '指示牌',
                            length: 1,
                            target: '1-3-4',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/指示牌.zip?_upd=true'
                        },
                        {
                            name: '胸卡',
                            length: 2,
                            target: '1-3-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/胸卡.zip?_upd=true'
                        },
                        {
                            name: '欢迎贺卡',
                            length: 1,
                            target: '1-3-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/欢迎贺卡.zip?_upd=true'
                        },
                        {
                            name: '桌签',
                            length: 1,
                            target: '1-3-7',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/桌签.zip?_upd=true'
                        },

                        {
                            name: '车证',
                            length: 1,
                            target: '1-3-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/车证.zip?_upd=true'
                        },
                        {
                            name: '接机牌',
                            length: 1,
                            target: '1-3-9',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/接机牌.zip?_upd=true'
                        },
                        {
                            name: '邀请函',
                            length: 3,
                            target: '1-3-10',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/邀请函.zip?_upd=true'
                        },
                        {
                            name: '电子邀请函',
                            length: 1,
                            target: '1-3-11',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/电子邀请函.zip?_upd=true'
                        },
                        {
                            name: '易拉宝',
                            length: 1,
                            target: '1-3-12',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/易拉宝.zip?_upd=true'
                        },
                        {
                            name: '主持人手卡',
                            length: 1,
                            target: '1-3-13',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/主持人手卡.zip?_upd=true'
                        },
                        {
                            name: '抽奖箱',
                            length: 1,
                            target: '1-3-14',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/抽奖箱.zip?_upd=true'
                        },
                        {
                            name: '抽奖券',
                            length: 1,
                            target: '1-3-15',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/抽奖券.zip?_upd=true'
                        },
                        {
                            name: '参观指南',
                            length: 1,
                            target: '1-3-16',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/参观指南.zip?_upd=true'
                        },
                        {
                            name: '展板',
                            length: 1,
                            target: '1-3-17',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/展板.zip?_upd=true'
                        },
                        {
                            name: 'ppt模板',
                            length: 1,
                            target: '1-3-18',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/ppt模板.zip?_upd=true'
                        },
                        {
                            length: 1,
                            name: '串场ppt',
                            target: '1-3-19',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/串场ppt.zip?_upd=true'
                        },
                        {
                            name: '话筒贴',
                            length: 1,
                            target: '1-3-20',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/话筒贴.zip?_upd=true'
                        },
                        {
                            name: '台卡签到处',
                            length: 1,
                            target: '1-3-21',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/台卡签到处.zip?_upd=true'
                        },
                        {
                            name: '椅背贴',
                            length: 1,
                            target: '1-3-22',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/椅背贴.zip?_upd=true'
                        },
                        {
                            name: '议程指示牌',
                            length: 1,
                            target: '1-3-23',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/议程指示牌.zip?_upd=true'
                        },

                        {
                            name: '会议h5邀请函',
                            length: 1,
                            target: '1-3-24',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/会议h5邀请函.zip?_upd=true'
                        },
                        {
                            name: '讲台贴',
                            length: 1,
                            target: '1-3-25',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/讲台贴.zip?_upd=true'
                        },
                        {
                            name: '条幅',
                            length: 1,
                            target: '1-3-26',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/条幅.zip?_upd=true'
                        },
                        {
                            name: '颁奖kt板',
                            length: 1,
                            target: '1-3-27',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/颁奖kt板.zip?_upd=true'
                        },
                        {
                            name: '签到表',
                            length: 1,
                            target: '1-3-28',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/签到表.zip?_upd=true'
                        },
                        {
                            name: '倒计时提醒牌',
                            length: 1,
                            target: '1-2-29',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/倒计时提醒牌.zip?_upd=true'
                        },
                        {
                            name: '签到背板',
                            length: 1,
                            target: '1-3-30',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/签到背板.zip?_upd=true'
                        }
                    ]
                },
                // {
                //     name: '线上活动视觉规范',
                //     f: '1/4',
                //     vi: '',
                //     originVi: '',
                //     third: [
                //         {
                //             name: '主视觉风格调性与元素拆分',
                //             length: 4,
                //             target: '1-4-1',
                //             download: ''
                //         },
                //         {
                //             name: '主题微信海报',
                //             length: 1,
                //             target: '1-4-2',
                //             download: ''
                //         },
                //         {
                //             name: '主题微信长图及邀请函',
                //             length: 1,
                //             target: '1-4-3',
                //             download: ''
                //         },
                //         {
                //             name: 'pc端专题页设计',
                //             length: 10,
                //             target: '1-4-4',
                //             download: ''
                //         },
                //         {
                //             name: '移动端专题页设计',
                //             length: 2,
                //             target: '1-4-5',
                //             download: ''
                //         },
                //         {
                //             name: '微吼发布页面',
                //             length: 1,
                //             target: '1-4-6',
                //             download: ''
                //         },
                //         {
                //             name: 'PPT模板',
                //             length: 1,
                //             target: '1-4-7',
                //             download: ''
                //         }
                //     ]
                // },
                {
                    name: '办公视觉规范',
                    f: '1/5',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/办公.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/办公.zip?_upd=true',
                    third: [
                        {name: '办公物料总揽', length: 1, target: '1-5-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/办公物料总览.zip?_upd=true'},
                        {name: '名片', length: 1, target: '1-5-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/名片.zip?_upd=true'},
                        {name: '工牌', length: 1, target: '1-5-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/工牌.zip?_upd=true'},
                        {name: 'DL信封', length: 1, target: '1-5-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/DL信封.zip?_upd=true'},
                        {name: '5号信封', length: 1, target: '1-5-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/5号信封.zip?_upd=true'},
                        {name: '7号信封', length: 1, target: '1-5-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/7号信封.zip?_upd=true'},
                        {name: '9号信封', length: 1, target: '1-5-7', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/9号信封.zip?_upd=true'},
                        {name: '纸杯', length: 1, target: '1-5-8', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/纸杯.zip?_upd=true'},
                        {name: '邀请函', length: 1, target: '1-5-9', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/邀请函.zip?_upd=true'},
                        {name: '授权书', length: 1, target: '1-5-10', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/授权书.zip?_upd=true'},
                        {name: '邮件签名', length: 1, target: '1-5-11', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/邮件签名横条.zip?_upd=true'},
                        {name: 'WORD模板', length: 1, target: '1-5-12', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/WORD模板.zip?_upd=true'},
                        {name: '行政立牌', length: 1, target: '1-5-13', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/行政立牌.zip?_upd=true'},
                        {name: '桌面立牌', length: 1, target: '1-5-14', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/桌面立牌.zip?_upd=true'},
                        {name: '桌面贴签', length: 1, target: '1-5-15', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/桌面贴签.zip?_upd=true'},
                        {name: '制度管理', length: 1, target: '1-5-16', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/制度管理.zip?_upd=true'},
                        {name: 'EDM', length: 1, target: '1-5-17', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/EDM.zip?_upd=true'},
                        {name: '外部采购', length: 1, target: '1-5-18', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/外部采购.zip?_upd=true'},
                        {name: '纸袋', length: 1, target: '1-5-19', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/纸袋.zip?_upd=true'},
                        {name: '帆布袋', length: 1, target: '1-5-20', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/帆布袋.zip?_upd=true'},
                        {name: '透明手提袋', length: 1, target: '1-5-21', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/透明手提袋.zip?_upd=true'},
                        {name: '前台背景墙', length: 1, target: '1-5-22', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/前台背景墙.zip?_upd=true'},
                        {name: '玻璃门防撞条', length: 1, target: '1-5-23', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/玻璃门防撞条.zip?_upd=true'},
                        {name: '警示标语', length: 1, target: '1-5-24', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/警示标语.zip?_upd=true'},
                        {name: '温馨提示', length: 1, target: '1-5-25', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/温馨提示.zip?_upd=true'},
                        {name: '门牌/部门牌', length: 1, target: '1-5-26', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/部门牌.zip?_upd=true'},
                        {name: '6s海报', length: 1, target: '1-5-27', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/6S海报.zip?_upd=true'}
                    ]
                },
                {
                    name: '网站视觉规范',
                    f: '1/6',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/网站.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/网站.zip?_upd=true',
                    third: [
                        {name: '网站页面基础元素与调性', length: 9, target: '1-6-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/网站/网站页面基础元素.zip?_upd=true'},
                        {name: '首页', length: 13, target: '1-6-2', download: ''},
                        {name: '产品页面', length: 1, target: '1-6-3', download: ''},
                        {name: '产品方案详情页', length: 1, target: '1-6-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/网站/产品方案详情页.zip?_upd=true'},
                        {name: '行业线首页', length: 1, target: '1-6-5', download: ''},
                        {name: '行业方案详情页', length: 1, target: '1-6-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/网站/行业方案详情页.zip?_upd=true'}
                    ]
                },
                {
                    name: '移动海报视觉规范',
                    f: '1/7',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/移动.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/海报.zip?_upd=true',
                    third: [
                        {name: '移动海报总览与界面尺寸', length: 3, target: '1-7-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/移动总览.zip?_upd=true'},
                        {name: '品牌案例海报', length: 1, target: '1-7-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/品牌案例.zip?_upd=true'},
                        {name: '品牌服务海报', length: 1, target: '1-7-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/品牌服务.zip?_upd=true'},
                        {name: '品牌业绩海报', length: 1, target: '1-7-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/品牌业绩.zip?_upd=true'},
                        {name: '产品品牌海报', length: 1, target: '1-7-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品品牌.zip?_upd=true'},
                        {name: '产品介绍海报', length: 1, target: '1-7-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品介绍.zip?_upd=true'},
                        {name: '产品方案海报', length: 1, target: '1-7-7', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品方案.zip?_upd=true'},
                        {name: '产品业绩海报', length: 1, target: '1-7-8', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品业绩.zip?_upd=true'},
                        {name: '行业介绍海报', length: 1, target: '1-7-9', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/行业介绍.zip?_upd=true'},
                        {name: '行业方案海报', length: 1, target: '1-7-10', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/行业方案.zip?_upd=true'},
                        {name: '行业案例海报', length: 1, target: '1-7-11', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/行业案例.zip?_upd=true'},
                        {name: '节日实践', length: 1, target: '1-7-12', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/节日实践.zip?_upd=true'},
                        {name: '活动海报', length: 1, target: '1-7-13', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/活动海报.zip?_upd=true'},
                        {name: '微信插图', length: 1, target: '1-7-14', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/微信插图.zip?_upd=true'},
                        {name: '裂变海报', length: 1, target: '1-7-15', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/裂变海报.zip?_upd=true'},
                        {name: 'H5邀请函标注', length: 1, target: '1-7-16', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/H5邀请函.zip?_upd=true'}
                    ]
                },
                {
                    name: '媒体投放图片视觉规范',
                    f: '1/8',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/媒体.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/媒体图.zip?_upd=true',
                    third: [
                        {name: '媒体宣传图片类型总览', length: 1, target: '1-8-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/媒体总览.zip?_upd=true'},
                        {name: 'pc端首页样式', length: 3, target: '1-8-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/pc端首页样式.zipi?_upd=true'},
                        {name: 'PC端样式', length: 4, target: '1-8-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/pc端样式.zip?_upd=true'},
                        {name: '移动端样式', length: 4, target: '1-8-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/移动端样式.zip?_upd=true'},
                        {name: '外部投放广告图画面调性', length: 1, target: '1-8-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/投放广告调性.zip?_upd=true'},
                        {name: '月度媒体投放广告', length: 5, target: '1-8-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/月度媒体投放广告.zip?_upd=true'}
                    ]
                },
                {
                    name: '产品包材视觉规范',
                    f: '1/9',
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷品牌视觉规范预览/锐捷品牌手册产品包材应用部分.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/产品包材.zip?_upd=true',
                    third: [
                        {name: '硬件', length: 1, target: '1-9-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/硬件.ai?_upd=true'},
                        {name: '运输箱标准模板', length: 1, target: '1-9-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/运输箱标准模板.ai?_upd=true'},
                        {name: '彩盒标准模板', length: 1, target: '1-9-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/彩盒标准模板.ai?_upd=true'},
                        {name: '福网-运输箱标签', length: 1, target: '1-9-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/福网-运输箱标签.ai?_upd=true'},
                        {name: '福网-彩盒标签', length: 1, target: '1-9-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/福网-彩盒标签.ai?_upd=true'},
                        {name: '京网-运输箱标签', length: 1, target: '1-9-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/京网-运输箱标签.ai?_upd=true'},
                        {name: '京网-彩盒标签', length: 1, target: '1-9-7', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/京网-彩盒标签.ai?_upd=true'},
                        {name: '易耗品标签', length: 1, target: '1-9-8', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/易耗品标签.ai?_upd=true'},
                        {name: '封签', length: 1, target: '1-9-9', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/封签.ai?_upd=true'},
                        {name: '封箱胶带', length: 1, target: '1-9-10', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/封箱胶带.ai?_upd=true'},
                        {name: '产品信息标签1', length: 5, target: '1-9-11', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/产品信息标签1.ai?_upd=true'},
                        {name: '产品信息标签：组合logo应用', length: 1, target: '1-9-12', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/产品信息标签：组合logo应用.ai?_upd=true'},
                        {name: '序列号标签-常见材质', length: 1, target: '1-9-13', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/序列号标签-常见材质.ai?_upd=true'},
                        {name: '序列号标签-耐高温材质', length: 1, target: '1-9-14', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/序列号标签-耐高温材质.ai?_upd=true'},
                        {name: '序列号标签-专用类', length: 1, target: '1-9-15', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/序列号标签-专用类.ai?_upd=true'},
                        {name: '序列号标签-二维码标签', length: 1, target: '1-9-16', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/序列号标签-二维码标签.ai?_upd=true'},
                        {name: '警告标签', length: 4, target: '1-9-17', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/警告标签.ai?_upd=true'},
                        {name: 'ROHS国内国际标', length: 1, target: '1-9-18', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/ROHS国内国际标.ai?_upd=true'},
                        {name: '装箱清单', length: 1, target: '1-9-19', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/装箱清单.ai?_upd=true'},
                        {name: '保修册', length: 2, target: '1-9-20', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/保修册.ai?_upd=true'},
                        {name: '手册', length: 2, target: '1-9-21', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/手册.ai?_upd=true'},
                        {name: '软件包装彩盒', length: 1, target: '1-9-22', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/软件包装彩盒.ai?_upd=true'},
                        {name: '光盘与封套', length: 2, target: '1-9-23', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/光盘与封套.ai?_upd=true'},
                        {name: '软件产品操作手册', length: 1, target: '1-9-24', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/软件产品操作手册.ai?_upd=true'},
                        {name: 'logo在软件界面的应用——启动屏幕', length: 2, target: '1-9-25', download: '"https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/产品/logo在软件界面的应用——启动屏幕.ai?_upd=true"'}
                    ]
                }
            ]
        },
        {
            name: '睿易视觉识别规范手册',
            icon: 'side-icon-02.png',
            second: [
                {
                    name: '品牌基础核心元素', // 二级目录名称
                    f: '2/1',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/LL/睿易品牌识别手册【基础部分】.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/YWJ/睿易VI手册【基础部分】.ai?_upd=true',
                    third: [
                        {
                            name: 'logo', // 三级目录名称
                            length: 10,   // 三级目录页数
                            target: '2-1-1',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/REYEE睿易logo文件.zip?_upd=true'
                        },
                        {
                            name: '品牌口号以及用法',
                            length: 1,
                            target: '2-1-2',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/REYEE睿易标语文件.zip?_upd=true'
                        },
                        {
                            name: '字体',
                            length: 2,
                            target: '2-1-3',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/字体.zip?_upd=true'
                        },
                        {
                            name: '色彩',
                            length: 2,
                            target: '2-1-4',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/REYEE睿易品牌标准色文件.zip?_upd=true'
                        },
                        {
                            name: '栅格板式',
                            length: 2,
                            target: '2-1-5',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/栅格版式.zip?_upd=true'
                        },
                        {
                            name: '影像风格',
                            length: 3,
                            target: '2-1-6',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/影像风格.zip?_upd=true'
                        },
                        {
                            name: '辅助图形',
                            length: 5,
                            target: '2-1-7',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/REYEE睿易辅助图形文件.zip?_upd=true'
                        },
                        {
                            name: '图标',
                            length: 2,
                            target: '2-1-8',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【基础部分】/REYEE睿易图标文件.zip?_upd=true'
                        }

                    ]
                },
                {
                    name: '广宣视觉规范', // 二级目录名称
                    f: '2/2',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/LL/睿易品牌识别手册【广宣部分】.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/YWJ/睿易VI手册【广宣部分】.zip?_upd=true',
                    third: [
                        {
                            name: '宣传品分类总览', // 三级目录名称
                            length: 4,   // 三级目录页数
                            target: '2-2-1',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/宣传品分类总览.ai?_upd=true'
                        },
                        {
                            name: '广告总览',
                            length: 1,
                            target: '2-2-2',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/广告总览.ai?_upd=true'
                        },
                        {
                            name: '品牌广告',
                            length: 2,
                            target: '2-2-3',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/品牌广告.zip?_upd=true'
                        },
                        {
                            name: '产品广告',
                            length: 3,
                            target: '2-2-4',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/普通产品广告.zip?_upd=true'
                        },
                        {
                            name: '栅格应用规范',
                            length: 2,
                            target: '2-2-5',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/栅格应用规范.ai?_upd=true'
                        },
                        {
                            name: '宣传品手册总览',
                            length: 1,
                            target: '2-2-6',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/宣传品手册总览.ai?_upd=true'
                        },
                        {
                            name: '品牌手册规范',
                            length: 5,
                            target: '2-2-7',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/品牌手册.zip?_upd=true'
                        },
                        {
                            name: '方案手册规范',
                            length: 2,
                            target: '2-2-8',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/方案手册.zip?_upd=true'
                        },
                        {
                            name: '产品手册规范',
                            length: 4,
                            target: '2-2-9',
                            download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【广宣部分】/产品手册.zip?_upd=true'
                        }

                    ]
                },
                {
                    name: '活动视觉规范', // 二级目录名称
                    f: '2/3',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/LL/睿易品牌识别手册【活动部分】.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/YWJ/睿易VI手册【活动部分】.zip?_upd=true',
                    third: [
                        {name: '活动视觉画面构成规范', length: 1, target: '2-3-1', download: ''},
                        {name: '总览', length: 2, target: '2-3-2', download: ''},
                        {name: '会议背景板',length: 4,target: '2-3-3',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/会议背景板.zip?_upd=true'},
                        {name: '讲台主题板',length: 1,target: '2-3-4',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/讲台主题板.zip?_upd=true'},
                        {name: '签到背板', length: 1, target: '2-3-5', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/签到背板.zip?_upd=true'},
                        {name: '指示牌',length: 1,target: '2-3-6',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/指示牌.zip?_upd=true'},
                        {name: '接机牌',length: 1,target: '2-3-7',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/接机牌.zip?_upd=true'},
                        {name: '桌签', length: 1, target: '2-3-8', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/桌签.zip?_upd=true'},
                        {name: '车证', length: 1, target: '2-3-9', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/车证.zip?_upd=true'},
                        {name: '椅贴',length: 1,target: '2-3-10',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/椅贴.zip?_upd=true'},
                        {name: '台卡签到处',length: 1,target: '2-3-11',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/台卡签到处.zip?_upd=true'},
                        {name: '条幅', length: 1, target: '2-3-12', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/条幅.zip?_upd=true'},
                        {name: '颁奖KT板', length: 1, target: '2-3-13', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/颁奖KT板.zip?_upd=true'},
                        {name: '易拉宝',length: 1,target: '2-3-14',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/易拉宝.zip?_upd=true'},
                        {name: 'X展架',length: 1,target: '2-3-15',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/X展架.zip?_upd=true'},
                        {name: '展板', length: 1, target: '2-3-16', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/展板.zip?_upd=true'},
                        {name: '议程指示牌', length: 1, target: '2-3-17', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/议程指示牌.zip?_upd=true'},
                        {name: '参观指南',length: 1,target: '2-3-18',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/参观指南.zip?_upd=true'},
                        {name: '讲台贴',length: 1,target: '2-3-19',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/讲台贴.zip?_upd=true'},
                        {name: '话筒贴', length: 1, target: '2-3-20', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/话筒贴.zip?_upd=true'},
                        {name: '主持人手卡', length: 1, target: '2-3-21', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/主持人手卡.zip?_upd=true'},
                        {name: '抽奖箱',length: 1,target: '2-3-22',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/抽奖箱.zip?_upd=true'},
                        {name: '抽奖券',length: 1,target: '2-3-23',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/抽奖券.zip?_upd=true'},
                        {name: '签到表', length: 1, target: '2-3-24', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/签到表.zip?_upd=true'},
                        {name: '倒计时提醒', length: 1, target: '2-3-25', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/倒计时.zip?_upd=true'},
                        {name: '胸卡',length: 2,target: '2-3-26',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/胸卡.zip?_upd=true'},
                        {name: '邀请函',length: 1,target: '2-3-27',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/邀请函.zip?_upd=true'},
                        {name: '电子邀请函', length: 1, target: '2-3-28', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/电子邀请函.zip?_upd=true'},
                        {name: 'h5邀请函', length: 1, target: '2-3-29', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/H5邀请函.zip?_upd=true'},
                        {name: '欢迎贺卡',length: 1,target: '2-3-30',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/欢迎贺卡.zip?_upd=true'},
                        {name: 'PPT',length: 2,target: '2-3-31',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【活动部分】/PPT模板.zip?_upd=true'},
                    ]
                },
                {
                    name: '办公视觉规范', // 二级目录名称
                    f: '2/4',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/LL/睿易品牌识别手册【办公部分】.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/YWJ/睿易VI手册【办公部分】.ai?_upd=true',
                    third: [
                        {name: '名片', length: 2, target: '2-4-1', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/名片.zip?_upd=true'},
                        {name: '信封', length: 2, target: '2-4-2', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/信封.zip?_upd=true'},
                        {name: '授权书',length: 1,target: '2-4-3',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/授权书.zip?_upd=true'},
                        {name: '邀请函',length: 6,target: '2-4-4',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/邀请函.zip?_upd=true'},
                        {name: 'PPT模板', length: 2, target: '2-4-5', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/ppt模板.ai?_upd=true'},
                        {name: '手提袋', length: 2, target: '2-4-6', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/手提袋.zip?_upd=true'},
                        {name: '帆布袋', length: 1, target: '2-4-7', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/帆布袋.zip?_upd=true'},
                        {name: '塑料袋', length: 2, target: '2-4-8', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/塑料袋.zip?_upd=true'},
                        {name: '纸杯',length: 2,target: '2-4-9',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/纸杯.zip?_upd=true'},
                        {name: 'T恤',length: 1,target: '2-4-10',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/T恤.ai?_upd=true'},
                        {name: 'U盘', length: 1, target: '2-4-11', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/U盘.ai?_upd=true'},
                        {name: '签字笔', length: 1, target: '2-4-12', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/签字笔.ai?_upd=true'},
                        {name: '保温杯', length: 1, target: '2-4-13', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/保温杯.ai?_upd=true'},
                        {name: '移动电源',length: 1,target: '2-4-14',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/移动电源.ai?_upd=true'},
                        {name: '双肩包',length: 1,target: '2-4-15',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/双肩包.ai?_upd=true'},
                        {name: '云体验箱', length: 1, target: '2-4-16', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/云体验箱.ai?_upd=true'},
                        {name: '手提箱', length: 1, target: '2-4-17', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/手提箱.ai?_upd=true'},
                        {name: '其他礼品', length: 3, target: '2-4-18', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/其他礼品.ai?_upd=true'},
                        {name: 'word',length: 1,target: '2-4-19',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/word.zip?_upd=true'},
                        {name: '门头规范',length: 3,target: '2-4-19',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【办公部分】/门头.ai?_upd=true'}
                    ]
                },
                {
                    name: '产品视觉规范', // 二级目录名称
                    f: '2/5',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/LL/睿易品牌识别手册【产品部分】.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/YWJ/睿易VI手册【产品部分】.ai?_upd=true',
                    third: [
                        {name: '产品相关logo应用',length: 2,target: '2-5-1',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/产品相关logo应用.ai?_upd=true'},
                        {name: '包材应用信息', length: 3, target: '2-5-2', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/包材应用信息.ai?_upd=true'},
                        {name: '字体', length: 2, target: '2-5-3', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/字体.ai?_upd=true'},
                        {name: '色彩', length: 1, target: '2-5-4', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/色彩.ai?_upd=true'},
                        {name: '栅格板式',length: 1,target: '2-5-5',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/栅格版式.ai?_upd=true'},
                        {name: '辅助图形',length: 1,target: '2-5-6',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/辅助图形.ai?_upd=true'},
                        {name: '彩盒包装', length: 6, target: '2-5-7', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/彩盒标准模板.zip?_upd=true'},
                        {name: '瓦楞纸盒包装', length: 6, target: '2-5-8', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/瓦楞纸包装标准模板.zip?_upd=true'},
                        {name: '运输箱', length: 6, target: '2-5-9', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/运输箱标准模板.zip?_upd=true'},
                        {name: '产品标识规范',length: 2,target: '2-5-10',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/产品标识规范.ai?_upd=true'},
                        {name: '包装用标签',length: 5,target: '2-5-11',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/包装用标签.ai?_upd=true'},
                        {name: '设备标签',length: 12,target: '2-5-12',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/设备标签.ai?_upd=true'},
                        {name: '相关认证', length: 2, target: '2-5-13', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/相关认证标.ai?_upd=true'},
                        {name: '封箱包材', length: 2, target: '2-5-14', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/封箱包材.ai?_upd=true'},
                        {name: '其它包材', length: 6, target: '2-5-15', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/其他包材.ai?_upd=true'},
                        {name: '软件包装模板',length: 5,target: '2-5-16',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【产品部分】/软件包装模板.ai?_upd=true'},
                    ]
                },
                {
                    name: '网站部分视觉规范', // 二级目录名称
                    f: '2/6',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/LL/睿易品牌识别手册【网站部分】.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/YWJ/睿易VI手册【网站部分】.ai?_upd=true',
                    third: [
                        {name: '网站要素构成',length: 2,target: '2-6-1',download: ''},
                        {name: '首页', length: 12, target: '2-6-2', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【网站部分】/REYEE睿易网站部分_首页.zip?_upd=true'},
                        {name: '睿网络基本要素', length: 1, target: '2-6-3', download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【网站部分】/REYEE睿易网站部分_睿网络.zip?_upd=true'},
                        {name: '睿网络各模块架构', length: 9, target: '2-6-4', download: ''},
                        {name: '易网络基本要素',length: 1,target: '2-6-5',download: ''},
                        {name: '易网络各模块架构',length: 9,target: '2-6-6',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【网站部分】/REYEE睿易网站部分_易网络.zip?_upd=true'},
                        {name: '交互样式',length: 3,target: '2-6-7',download: 'https://zlkfile.ruijie.com.cn/ruiyiguifan(Z)/CJWJ/睿易品牌识别手册【网站部分】/REYEE睿易网站部分_交互样式.zip?_upd=true'}
                    ]
                },
            ]
        },
        {
            name: 'Ragile品牌视觉规范',
            icon: 'side-icon-03.png',
            second: [
                {
                    name: '品牌基础核心元素', // 二级目录名称
                    f: '3/1',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件/Ragile视觉系统—产品.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(总)/基础.zip?_upd=true',
                    third: [
                        {
                            name: 'logo', // 三级目录名称
                            length: 3,   // 三级目录页数
                            target: '3-1-1',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/基础/logo.zip?_upd=true'
                        },
                        {
                            name: '色彩',
                            length: 2,
                            target: '3-1-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/基础/色彩.zip?_upd=true'
                        },
                        {
                            name: '字体',
                            length: 2,
                            target: '3-1-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/基础/字体.zip?_upd=true'
                        },
                        {
                            name: '影像', // 三级目录名称
                            length: 7,   // 三级目录页数
                            target: '3-1-4',  // 菜单锚点目标id
                            download: ''
                        },
                        {
                            name: '图标',
                            length: 2,
                            target: '3-1-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/基础/图标.zip?_upd=true'
                        },
                        {
                            name: '拓扑图',
                            length: 1,
                            target: '3-1-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/基础/拓扑图.zip?_upd=true'
                        },
                        {
                            name: '栅格版式', // 三级目录名称
                            length: 2,   // 三级目录页数
                            target: '3-1-7',  // 菜单锚点目标id
                            download: ''
                        },
                        {
                            name: '辅助图形',
                            length: 7,
                            target: '3-1-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/基础/辅助图形.zip?_upd=true'
                        }
                    ]
                },
                {
                    name: '广宣视觉规范', // 二级目录名称
                    f: '3/2',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件/Ragile视觉系统—宣传品.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(总)/宣传品.zip?_upd=true',
                    third: [
                        {
                            name: '产品彩页', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-2-1',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/产品彩页.zip?_upd=true'
                        }
                    ]
                },
                {
                    name: '活动视觉规范', // 二级目录名称
                    f: '3/3',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件/Ragile视觉系统—活动.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(总)/市场.zip?_upd=true',
                    third: [
                        {
                            name: '活动视觉画面构成规范', // 三级目录名称
                            length: 2,   // 三级目录页数
                            target: '3-3-1',  // 菜单锚点目标id
                            download: ''
                        },
                        {
                            name: '行业以及会议背景板-浅',
                            length: 4,
                            target: '3-3-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/行业以及会议背景板-浅.zip?_upd=true'
                        },
                        {
                            name: '纸质邀请函-浅',
                            length: 2,
                            target: '3-3-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/纸质邀请函-浅.zip?_upd=true'
                        },
                        {
                            name: '电子邀请函-浅', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-3-4',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/电子邀请函-浅.zip?_upd=true'
                        },
                        {
                            name: '易拉宝-浅',
                            length: 1,
                            target: '3-3-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/易拉宝-浅.zip?_upd=true'
                        },
                        {
                            name: 'x展架-浅',
                            length: 1,
                            target: '3-3-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/X展架-浅.zip?_upd=true'
                        },
                        {
                            name: '参观指南-浅', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-3-7',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/参观指南-浅.zip?_upd=true'
                        },
                        {
                            name: '展板-浅',
                            length: 1,
                            target: '3-3-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/展板-浅.zip?_upd=true'
                        },
                        {
                            name: '深色主视觉',
                            length: 2,
                            target: '3-3-9',
                            download: ''
                        },
                        {
                            name: '行业以及会议背景板-深', // 三级目录名称
                            length: 4,   // 三级目录页数
                            target: '3-3-10',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/行业以及会议背景板-深.zip?_upd=true'
                        },
                        {
                            name: '纸质邀请函-深',
                            length: 2,
                            target: '3-3-11',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/纸质邀请函-深.zip?_upd=true'
                        },
                        {
                            name: '电子邀请函-深',
                            length: 1,
                            target: '3-3-12',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/电子邀请函-深.zip?_upd=true'
                        },
                        {
                            name: '易拉宝-深', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-3-13',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/易拉宝-深.zip?_upd=true'
                        },
                        {
                            name: 'x展架-深',
                            length: 1,
                            target: '3-3-14',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/X展架-深.zip?_upd=true'
                        },
                        {
                            name: '参观指南-深',
                            length: 1,
                            target: '3-3-15',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/参观指南-深.zip?_upd=true'
                        },
                        {
                            name: '展板-深', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-3-16',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/活动/展板-深.zip?_upd=true'
                        }
                    ]
                },
                {
                    name: '办公视觉规范', // 二级目录名称
                    f: '3/4',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件/Ragile视觉系统—办公.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(总)/办公.zip?_upd=true',
                    third: [
                        {
                            name: '名片', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-4-1',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/名片.zip?_upd=true'
                        },
                        {
                            name: '信封',
                            length: 1,
                            target: '3-4-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/信封.zip?_upd=true'
                        },
                        {
                            name: '工牌',
                            length: 1,
                            target: '3-4-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/工牌.zip?_upd=true'
                        },
                        {
                            name: '手提袋', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-4-4',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/手提袋.zip?_upd=true'
                        },
                        {
                            name: '纸杯',
                            length: 1,
                            target: '3-4-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/纸杯.zip?_upd=true'
                        },
                        {
                            name: '授权书',
                            length: 1,
                            target: '3-4-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/授权书.zip?_upd=true'
                        },
                        {
                            name: 'word', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-4-7',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/word.zip?_upd=true'
                        },
                        {
                            name: 'ppt',
                            length: 2,
                            target: '3-4-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/ppt.zip?_upd=true'
                        },
                        {
                            name: '前台背景墙',
                            length: 3,
                            target: '3-4-9',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/前台背景墙.zip?_upd=true'
                        },
                        {
                            name: '邮件签名', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-4-10',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/办公/邮件签名.zip?_upd=true'
                        }
                    ]
                },
                {
                    name: '产品视觉规范', // 二级目录名称
                    f: '3/5',  // 三级目录对应图片部分路径
                    vi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件/Ragile视觉系统—产品.pdf?_upd=true',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(总)/产品.zip?_upd=true',
                    third: [
                        {
                            name: '运输箱标准模板', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-1',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/运输箱标准模板.zip?_upd=true'
                        },
                        {
                            name: '彩盒标准模板',
                            length: 1,
                            target: '3-5-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/彩盒标准模板.zip?_upd=true'
                        },
                        {
                            name: '福网-运输箱标签',
                            length: 1,
                            target: '3-5-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/福网-运输箱标签.zip?_upd=true'
                        },
                        {
                            name: '福网-彩盒标签', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-4',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/福网-彩盒标签.zip?_upd=true'
                        },
                        {
                            name: '封箱胶带',
                            length: 1,
                            target: '3-5-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/封箱胶带.zip?_upd=true'
                        },
                        {
                            name: '产品信息标签',
                            length: 1,
                            target: '3-5-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/产品信息标签.zip?_upd=true'
                        },
                        {
                            name: '序列号标签-常见材质', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-7',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/序列号标签-常见材质.zip?_upd=true'
                        },
                        {
                            name: '序列号标签-耐高温材质',
                            length: 1,
                            target: '3-5-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/序列号标签-耐高温材质.zip?_upd=true'
                        },
                        {
                            name: '序列号标签-专用类',
                            length: 1,
                            target: '3-5-9',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/序列号标签-专用类.zip?_upd=true'
                        },
                        {
                            name: '序列号标签-二维码标签', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-10',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/序列号标签-二维码标签.zip?_upd=true'
                        },
                        {
                            name: '警告标签',
                            length: 1,
                            target: '3-5-11',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/警告标签.zip?_upd=true'
                        },
                        {
                            name: 'ROHS国内国际标',
                            length: 1,
                            target: '3-5-12',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/ROHS国内国际标.zip?_upd=true'
                        },
                        {
                            name: '装箱清单', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-13',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/装箱清单.zip?_upd=true'
                        },
                        {
                            name: '保修册', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-14',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/保修手册.zip?_upd=true'
                        },
                        {
                            name: '手册',
                            length: 1,
                            target: '3-5-15',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/手册.zip?_upd=true'
                        },
                        {
                            name: '软件包装彩盒',
                            length: 1,
                            target: '3-5-16',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/软件包装彩盒.zip?_upd=true'
                        },
                        {
                            name: '光盘', // 三级目录名称
                            length: 1,   // 三级目录页数
                            target: '3-5-17',  // 菜单锚点目标id
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/光盘.zip?_upd=true'
                        },
                        {
                            name: '光盘封套',
                            length: 1,
                            target: '3-5-18',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/光盘封套.zip?_upd=true'
                        },
                        {
                            name: '软件产品操作手册',
                            length: 1,
                            target: '3-5-19',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷Ragile视觉规范文件(拆)/产品/软件产品操作手册.zip?_upd=true'
                        }
                    ]
                },
            ]
        }
    ],
    init: function() {
        var _this = this;
        console.time('cerate sidebar:')
        this.initSidebar();
        this.initLazyLoad();
        console.timeEnd('cerate sidebar:')
        this.initSidebarEvent();
        this.initOnNav();
        this.wWidth = $(window).width();
        window.addEventListener('resize', function() {
            var scrollContent = $('#scrollContent');
            scrollContent.animate({scrollTop: 0}, 0);
            setTimeout(() => {
                _this.initOnNav();
                this.wWidth = $(window).width();
            }, 100);
        })
    },
    initSidebar: function() {
        var sidebar = $('.sidebar-list');
        // 一级菜单
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
        // 二级菜单
        var str = '';
        for (var i = 0, len= list.length; i < len; i++) {
            str += '<li class="sub-list-item">' +
                        '<span class="sub-text">'+ list[i].name +'</span>' +
                        this.getThirdStr(list[i].third || [], list[i].f, list[i].name, list[i].vi, list[i].originVi) +
                    '</li>';
        }
        return '<ul class="sub-list">' + str + '</ul>'
    },
    getThirdStr: function(list, f, title, vi, originVi) {
        if (!list.length) {
            return ''
        }
        var imgContent = $('.img-content');
        // 三级菜单
        var str = '';
        var contentStr = ''
        for (var i = 0, len = list.length; i < len; i++) {
            str += '<li class="third-list-item">' +
                        '<a data-target="'+ list[i].target +'" href="#'+ list[i].target +'" class="third-text anchor-button">'+ list[i].name +'</a>' +
                    '</li>';
            contentStr += this.getImgList(list[i], f + '/' + (i + 1), title, vi, originVi);
        }
        imgContent.append(contentStr);
        return '<ul class="third-list">' + str + '</ul>';
    },
    getImgList: function(item, f, title, vi, originVi) {
        var str = '';
        if (item.download) {
            str = '<div class="info-title clearfix">'+
                    '<h5 class="title">'+ item.name +'</h5>'+
                    '<a class="btn white" href="'+ item.download +'">'+
                        '下载源文件模板'+
                        '<img src="./RJ-img/download-white.png" class="download" alt="">'+
                    '</a>'+
                '</div>';
        } else {
            str = '<div class="info-title clearfix">'+
                    '<h5 class="title">'+ item.name +'</h5>'+
                '</div>';
        }

        for (var i = 1; i <= item.length; i++) {
            if (i === 1) {
                str +=  '<div class="item" id="'+ item.target +'" data-title="'+ title +'" data-vi="'+ vi +'" data-origin-vi="'+ originVi +'">'+
                            '<img class="item-img lazyload" data-original="./RJ-img/'+f+'/'+ (i < 10 ? "0" + i : i) +'.jpg" alt="">'+
                        '</div>';
            } else {
                str +=  '<div class="item">'+
                            '<img class="item-img lazyload" data-original="./RJ-img/'+f+'/'+ (i < 10 ? "0" + i : i) +'.jpg" alt="">'+
                        '</div>';
            }
        }
        return str;
    },
    initSidebarEvent: function() {
        var _this = this;
        var scrollContent = $('#scrollContent');

        $('.sidebar-text').on('click', function() {
            var parent = $(this).parent('.sidebar-list-item');
            parent.siblings().removeClass('active');
            _this.setElStatus(parent);
        })

        $('.sub-text').on('click', function() {
            var parent = $(this).parent('.sub-list-item');
            _this.setElStatus(parent);
        })

        $('.third-text').on('click', function(e) {
            e = window.e || e;
            e.preventDefault();
            var parent = $(this).parent('.third-list-item');
            var parents = $(this).parents('.sub-list-item ');
            var pParents = $(this).parents('.sidebar-list-item');
            var currScroll = scrollContent.scrollTop();
            if (!parent.hasClass('active')) {
                parent.siblings().removeClass('active');
                parents.siblings().find('.third-list-item').removeClass('active');
                pParents.siblings().find('.third-list-item').removeClass('active');
                parent.addClass('active');

                if ($(this).parent('.third-list-item').hasClass('active')) {
                    var id = $(this).data('target');
                    var targetScroll = currScroll + $('#'+ id).offset().top - _this.getDiff()
                    scrollContent.animate({scrollTop: targetScroll + 'px'}, 10);
                    if (_this.wWidth <= 768) {
                        $('.zg-header-menu').removeClass('open');
                        $('.sidebar').css({display: 'none'});
                    }
                }
            }
        })

        $('.zg-header-menu').on('click', function() {
            var isOn = $(this).hasClass('open');
            if (isOn) {
                $(this).removeClass('open');
                $('.sidebar').css({display: 'none'});
            } else {
                $(this).addClass('open');
                $('.sidebar').css({display: 'block'});
            }
        })
    },
    getDiff: function() {
        var w = this.wWidth;
        if (w <= 768) {
            return 162;
        }
        return 232
    },
    setElStatus: function(parent) {
        if (parent.hasClass('active')) {
            parent.removeClass('active');
        } else {
            parent.addClass('active');
        }
    },
    initOnNav: function() {
        var _self = this;
        new Scrollspy({
            scrollElement: '#scrollContent',
            offset: 242,
            selector: '.anchor-button',
            activeCls: 'active',
            reachActive: function(el) {
                var title = $(el).data('title');
                var vi =  $(el).data('vi')
                var ovi =  $(el).data('origin-vi')
                $('.dynamic-title').text(title)
                var viBtn = $('.dynamic-title').next().find('.vi')
                var oViBtn = viBtn.next()
                viBtn.attr('href', vi)
                oViBtn.attr('href', ovi)
                if (!vi) {
                    viBtn.hide()
                } else {
                    viBtn.show()
                }
                if (!ovi) {
                    oViBtn.hide()
                } else {
                    oViBtn.show()
                }
                if (_self.timer) {
                    clearTimeout(_self.timer)
                }
                var currNav = $('.anchor-button[href="' + el + '"]');
                _self.timer = setTimeout(() => {
                    var parent = currNav.parent('.third-list-item');
                    var parents = currNav.parents('.sub-list-item ');
                    var pParents = currNav.parents('.sidebar-list-item');
                    parent.siblings().removeClass('active');
                    parents.siblings().removeClass('active');
                    pParents.siblings().removeClass('active');
                    parent.addClass('active');
                    pParents.addClass('active');
                    parents.addClass('active')
                }, 200);
            }
        });
    },
    initLazyLoad: function() {
        $('img.lazyload').lazyload({
            scrollElement: '#scrollContent'
        })
    }
}

$(function() {
    PAGE.init()
})