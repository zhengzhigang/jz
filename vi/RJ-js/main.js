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
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/11912',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总））/基础.zip',
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
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/logo.ai'
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
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/色彩.ai'
                        },
                        {
                            name: '栅格板式',
                            length: 3,
                            target: '1-1-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/栅格板式.ai'
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
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/辅助图形.ai'
                        },
                        {
                            name: '图标',
                            length: 4,
                            target: '1-1-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/基础/图标.ai'
                        }

                    ]
                },
                {
                    name: '宣传品视觉规范',
                    f: '1/2',
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/11848',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/宣传品.zip',
                    third: [
                        {
                            name: '宣传总揽与基础栅格',
                            length: 4,
                            target: '1-2-1',
                            download: ''
                        },
                        {
                            name: '品牌画册/刊物',
                            length: 7,
                            target: '1-2-2',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/.zip'
                        },
                        {
                            name: '产品/行业解决方案折页/集',
                            length: 5,
                            target: '1-2-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品/行业解决方案折页/集.zip'
                        },
                        {
                            name: '产品/行业案例集',
                            length: 15,
                            target: '1-2-4',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品/行业案例集.ai'
                        },
                        {
                            name: '产品彩页',
                            length: 4,
                            target: '1-2-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品彩页.ai'
                        },
                        {
                            name: '产品技术白皮书',
                            length: 5,
                            target: '1-2-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品技术白皮书.ai'
                        },
                        {
                            name: '产品索引',
                            length: 3,
                            target: '1-2-7',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/宣传品/产品索引.ai'
                        },

                    ]
                },
                {
                    name: '活动视觉规范',
                    f: '1/3',
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/12216',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/活动.zip',
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
                            download: ''
                        },
                        {
                            name: '主视觉背板',
                            length: 3,
                            target: '1-3-3',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/主视觉背板.ai'
                        },
                        {
                            name: '指示牌',
                            length: 1,
                            target: '1-3-4',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/指示牌.ai'
                        },
                        {
                            name: '胸卡',
                            length: 2,
                            target: '1-3-5',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/胸卡.ai'
                        },
                        {
                            name: '欢迎贺卡',
                            length: 1,
                            target: '1-3-6',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/欢迎贺卡.ai'
                        },
                        {
                            name: '桌签',
                            length: 1,
                            target: '1-3-7',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/桌签.ai'
                        },

                        {
                            name: '车证',
                            length: 1,
                            target: '1-3-8',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/车证.ai'
                        },
                        {
                            name: '接机牌',
                            length: 1,
                            target: '1-3-9',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/接机牌.ai'
                        },
                        {
                            name: '邀请函',
                            length: 3,
                            target: '1-3-10',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/邀请函.ai'
                        },
                        {
                            name: '电子邀请函',
                            length: 1,
                            target: '1-3-11',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/电子邀请函.psd'
                        },
                        {
                            name: '易拉宝',
                            length: 1,
                            target: '1-3-12',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/易拉宝.ai'
                        },
                        {
                            name: '主持人手卡',
                            length: 1,
                            target: '1-3-13',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/主持人手卡.ai'
                        },
                        {
                            name: '抽奖箱',
                            length: 1,
                            target: '1-3-14',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/抽奖箱.ai'
                        },
                        {
                            name: '抽奖券',
                            length: 1,
                            target: '1-3-15',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/抽奖券.ai'
                        },
                        {
                            name: '参观指南',
                            length: 1,
                            target: '1-3-16',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/参观指南.ai'
                        },
                        {
                            name: '展板',
                            length: 1,
                            target: '1-3-17',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/展板.ai'
                        },
                        {
                            name: 'ppt模板',
                            length: 1,
                            target: '1-3-18',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/ppt模板.ai'
                        },
                        {
                            length: 1,
                            name: '串场ppt',
                            target: '1-3-19',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/串场ppt.ai'
                        },
                        {
                            name: '话筒贴',
                            length: 1,
                            target: '1-3-20',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/话筒贴.ai'
                        },
                        {
                            name: '台卡签到处',
                            length: 1,
                            target: '1-3-21',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/台卡签到处.ai'
                        },
                        {
                            name: '椅背贴',
                            length: 1,
                            target: '1-3-22',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/椅背贴.ai'
                        },
                        {
                            name: '议程指示牌',
                            length: 1,
                            target: '1-3-23',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/议程指示牌.ai'
                        },

                        {
                            name: '会议h5邀请函',
                            length: 1,
                            target: '1-3-24',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/会议h5邀请函.ai'
                        },
                        {
                            name: '讲台贴',
                            length: 1,
                            target: '1-3-25',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/讲台贴.ai'
                        },
                        {
                            name: '条幅',
                            length: 1,
                            target: '1-3-26',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/条幅.ai'
                        },
                        {
                            name: '颁奖kt板',
                            length: 1,
                            target: '1-3-27',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/颁奖kt板.psd'
                        },
                        {
                            name: '签到表',
                            length: 1,
                            target: '1-3-28',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/签到表.ai'
                        },
                        {
                            name: '倒计时提醒牌',
                            length: 1,
                            target: '1-2-29',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/倒计时提醒牌.ai'
                        },
                        {
                            name: '签到背板',
                            length: 1,
                            target: '1-3-30',
                            download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/活动/签到背板.ai'
                        }
                    ]
                },
                {
                    name: '线上活动视觉规范',
                    f: '1/4',
                    vi: '',
                    originVi: '',
                    third: [
                        {
                            name: '主视觉风格调性与元素拆分',
                            length: 4,
                            target: '1-4-1',
                            download: ''
                        },
                        {
                            name: '主题微信海报',
                            length: 1,
                            target: '1-4-2',
                            download: ''
                        },
                        {
                            name: '主题微信长图及邀请函',
                            length: 1,
                            target: '1-4-3',
                            download: ''
                        },
                        {
                            name: 'pc端专题页设计',
                            length: 10,
                            target: '1-4-4',
                            download: ''
                        },
                        {
                            name: '移动端专题页设计',
                            length: 2,
                            target: '1-4-5',
                            download: ''
                        },
                        {
                            name: '微吼发布页面',
                            length: 1,
                            target: '1-4-6',
                            download: ''
                        },
                        {
                            name: 'PPT模板',
                            length: 1,
                            target: '1-4-7',
                            download: ''
                        }
                    ]
                },
                {
                    name: '办公视觉规范',
                    f: '1/5',
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/10778',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/办公.zip',
                    third: [
                        {name: '办公物料总揽', length: 1, target: '1-5-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/办公物料总揽.ai'},
                        {name: '名片', length: 1, target: '1-5-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/名片.ai'},
                        {name: '工牌', length: 1, target: '1-5-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/工牌.ai'},
                        {name: 'DL信封', length: 1, target: '1-5-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/DL信封.ai'},
                        {name: '5号信封', length: 1, target: '1-5-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/5号信封.ai'},
                        {name: '7号信封', length: 1, target: '1-5-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/7号信封.ai'},
                        {name: '9号信封', length: 1, target: '1-5-7', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/9号信封.ai'},
                        {name: '纸杯', length: 1, target: '1-5-8', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/纸杯.ai'},
                        {name: '邀请函', length: 1, target: '1-5-9', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/邀请函.ai'},
                        {name: '授权书', length: 1, target: '1-5-10', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/授权书.ai'},
                        {name: '邮件签名', length: 1, target: '1-5-11', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/邮件签名.ai'},
                        {name: 'WORD模板', length: 1, target: '1-5-12', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/WORD模板.ai'},
                        {name: '行政立牌', length: 1, target: '1-5-13', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/行政立牌.ai'},
                        {name: '桌面立牌', length: 1, target: '1-5-14', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/桌面立牌.psd'},
                        {name: '桌面贴签', length: 1, target: '1-5-15', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/桌面贴签.psd'},
                        {name: '制度管理', length: 1, target: '1-5-16', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/制度管理.psd'},
                        {name: 'EDM', length: 1, target: '1-5-17', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/EDM.zip'},
                        {name: '外部采购', length: 1, target: '1-5-18', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/外部采购.ai'},
                        {name: '纸袋', length: 1, target: '1-5-19', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/纸袋.ai'},
                        {name: '帆布袋', length: 1, target: '1-5-20', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/帆布袋.ai'},
                        {name: '透明手提袋', length: 1, target: '1-5-21', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/透明手提袋.ai'},
                        {name: '前台背景墙', length: 1, target: '1-5-22', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/前台背景墙.ai'},
                        {name: '玻璃门防撞条', length: 1, target: '1-5-23', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/玻璃门防撞条.ai'},
                        {name: '警示标语', length: 1, target: '1-5-24', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/警示标语.psd'},
                        {name: '温馨提示', length: 1, target: '1-5-25', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/温馨提示.psd'},
                        {name: '门牌/部门牌', length: 1, target: '1-5-26', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/门牌/部门牌.ai'},
                        {name: '6s海报', length: 1, target: '1-5-27', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/办公/6s海报.psd'}
                    ]
                },
                {
                    name: '网站视觉规范',
                    f: '1/6',
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/12138',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/网站.zip',
                    third: [
                        {name: '网站页面基础元素与调性', length: 9, target: '1-6-1', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/网站/网站页面基础元素与调性.zip'},
                        {name: '首页', length: 13, target: '1-6-2', download: ''},
                        {name: '产品页面', length: 1, target: '1-6-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/网站/产品页面.psd'},
                        {name: '产品方案详情页', length: 1, target: '1-6-4', download: ''},
                        {name: '行业线首页', length: 1, target: '1-6-5', download: ''},
                        {name: '行业方案详情页', length: 1, target: '1-6-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/网站/解决方案详情页.psd'}
                    ]
                },
                {
                    name: '移动海报视觉规范',
                    f: '1/7',
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/12140',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/海报.zip',
                    third: [
                        {name: '移动海报总览与界面尺寸', length: 3, target: '1-7-1', download: ''},
                        {name: '品牌案例海报', length: 1, target: '1-7-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/品牌案例.psd'},
                        {name: '品牌服务海报', length: 1, target: '1-7-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/品牌服务.psd'},
                        {name: '品牌业绩海报', length: 1, target: '1-7-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/品牌业绩.psd'},
                        {name: '产品品牌海报', length: 1, target: '1-7-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品品牌.psd'},
                        {name: '产品介绍海报', length: 1, target: '1-7-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品介绍.psd'},
                        {name: '产品方案海报', length: 1, target: '1-7-7', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品方案.ai'},
                        {name: '产品业绩海报', length: 1, target: '1-7-8', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/产品业绩.psd'},
                        {name: '行业介绍海报', length: 1, target: '1-7-9', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/行业介绍.ai'},
                        {name: '行业方案海报', length: 1, target: '1-7-10', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/行业方案.psd'},
                        {name: '行业案例海报', length: 1, target: '1-7-11', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/行业案例.psd'},
                        {name: '节日实践', length: 1, target: '1-7-12', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/节日实践.psd'},
                        {name: '活动海报', length: 1, target: '1-7-13', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/活动海报.psd'},
                        {name: '微信插图', length: 1, target: '1-7-14', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/微信插图.psd'},
                        {name: '裂变海报', length: 1, target: '1-7-15', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/裂变海报.psd'},
                        {name: 'H5邀请函标注', length: 1, target: '1-7-16', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/海报/H5邀请函.ai'}
                    ]
                },
                {
                    name: '媒体投放图片视觉规范',
                    f: '1/8',
                    vi: 'http://zlk.ruijie.com.cn/FileDatabase/Detail/12139',
                    originVi: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范源文件（总）/媒体图.zip',
                    third: [
                        {name: '媒体宣传图片类型总览', length: 1, target: '1-8-1', download: ''},
                        {name: 'pc端首页样式', length: 3, target: '1-8-2', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/pc端首页样式.ai'},
                        {name: 'PC端样式', length: 4, target: '1-8-3', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/pc端样式.ai'},
                        {name: '移动端样式', length: 4, target: '1-8-4', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/移动端样式.ai'},
                        {name: '外部投放广告图画面调性', length: 1, target: '1-8-5', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/外部投放广告图画面调性.ai'},
                        {name: '月度媒体投放广告', length: 5, target: '1-8-6', download: 'https://zlkfile.ruijie.com.cn/锐捷网络品牌视觉规范/媒体图/月度媒体投放广告.ai'}
                    ]
                }
            ]
        },
        {
            name: 'Reyee品牌视觉规范',
            icon: 'side-icon-02.png',
            f: '2',
            second: []
        },
        {
            name: 'Ragial品牌视觉规范',
            icon: 'side-icon-03.png',
            f: '3',
            second: []
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