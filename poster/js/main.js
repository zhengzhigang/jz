void (function () {
  var posterList = [
    { name: '安荣', year: '2017、2020年', prize: '最佳开发奖、最佳拓展奖', type: 1 },
    { name: '白小飞', year: '2018、2020年', prize: '年度敬业奖、年度敬业奖', type: 1 },
    { name: '曾辉', year: '2014年', prize: '安博通之星', type: 1 },
    { name: '车源', year: '2019年', prize: '最佳支撑奖', type: 1 },
    { name: '陈王英才', year: '2020年', prize: '最佳支撑奖', type: 1 },
    { name: '陈伟鹏', year: '2016年', prize: '最佳拓展奖', type: 1 },
    { name: '崔彩霞', year: '2018年', prize: '最佳测试奖', type: 1 },
    { name: '段彬', year: '2013年', prize: '安博通之星', type: 1 },
    { name: '范俊杰', year: '2017年', prize: '最佳拓展奖', type: 1 },
    { name: '冯坤', year: '2020年', prize: '最佳开发奖', type: 1 },
    { name: '顾梦楠', year: '2018年', prize: '最佳拓展奖', type: 1 },
    { name: '郭泽生', year: '2016、2019年', prize: '最佳测试奖、最佳测试奖', type: 1 },
    { name: '韩亚飞', year: '2016年', prize: '年度敬业奖', type: 1 },
    { name: '胡星', year: '2020年', prize: '最佳测试奖', type: 1 },
    { name: '胡星星', year: '2019年', prize: '最佳开发奖', type: 1 },
    { name: '黄忠雷', year: '2019年', prize: '最佳新人奖', type: 1 },
    { name: '金晨良子', year: '2020年', prize: '最佳新人奖', type: 1 },
    { name: '冷武超', year: '2018年', prize: '最佳支撑奖', type: 1 },
    { name: '李洪宇', year: '2020年', prize: '安博通之星', type: 1 },
    { name: '李欢', year: '2019年', prize: '最佳新人奖', type: 1 },
    { name: '李萌', year: '2015、2016、2018年', prize: '最佳新人奖、最佳开发奖、最佳开发奖', type: 1 },
    { name: '李晴', year: '2020年', prize: '最佳新人奖', type: 1 },
    { name: '李先瞧', year: '2016年', prize: '最佳新人奖', type: 1 },
    { name: '李响', year: '2015年', prize: '最佳新人奖', type: 1 },
    { name: '李永辉', year: '2019年', prize: '最佳新人奖', type: 1 },
    { name: '李源', year: '2018年', prize: '金牌销售奖', type: 1 },
    { name: '李远', year: '2015年', prize: '安博通之星', type: 1 },
    { name: '李振华', year: '2020年', prize: '金牌销售奖', type: 1 },
    { name: '林丛岭', year: '2019年', prize: '最佳测试奖', type: 1 },
    { name: '刘恒', year: '2019年', prize: '最佳测试奖', type: 1 },
    { name: '刘琼', year: '2019年', prize: '年度敬业奖', type: 1 },
    { name: '刘声明', year: '2015、2016年', prize: '年度敬业奖、最佳开发奖', type: 1 },
    { name: '刘小伟', year: '2017年', prize: '最佳新人奖', type: 1 },
    { name: '柳开江', year: '2018年', prize: '最佳开发奖', type: 1 },
    { name: '鲁薇', year: '2019年', prize: '最佳开发奖', type: 1 },
    { name: '鹿贺', year: '2014、2018年', prize: '最佳拓展奖、安博通之星', type: 1 },
    { name: '梅家俊', year: '2020年', prize: '最佳支撑奖', type: 1 },
    { name: '梅宇', year: '2020年', prize: '最佳新人奖', type: 1 },
    { name: '牛晓峰', year: '2019年', prize: '金牌销售奖', type: 1 },
    { name: '彭小雨', year: '2017年', prize: '年度敬业奖', type: 1 },
    { name: '乔志巍', year: '2018年', prize: '最佳产品经理奖', type: 1 },
    { name: '瞿磊', year: '2020年', prize: '最佳测试奖', type: 1 },
    { name: '任作明', year: '2018年', prize: '最佳支撑奖', type: 1 },
    { name: '荣艳明', year: '2017、2019、2020年', prize: '最佳新人奖、最佳拓展奖、最佳拓展奖', type: 1 },
    { name: '宋红林', year: '2019、2020年', prize: '最佳支撑奖、最佳支撑奖', type: 1 },
    { name: '孙祥明', year: '2017年', prize: '最佳产品经理奖', type: 1 },
    { name: '唐际当', year: '2016年', prize: '最佳测试奖', type: 1 },
    { name: '陶荣', year: '2020年', prize: '特别贡献奖', type: 1 },
    { name: '涂兴洋', year: '2020年', prize: '最佳新人奖', type: 1 },
    { name: '屠晓蕊', year: '2017、2018、2019年', prize: '最佳拓展奖、金牌销售奖、金牌销售奖', type: 1 },
    { name: '汪昕祎', year: '2018年', prize: '最佳新人奖', type: 1 },
    { name: '王英', year: '2019年', prize: '最佳开发奖', type: 1 },
    { name: '王志杰', year: '2015、2019、2020年', prize: '最佳维护奖、最佳支撑奖、最佳产品经理奖', type: 1 },
    { name: '王智齐', year: '2020年', prize: '最佳产品经理奖', type: 1 },
    { name: '吴笛', year: '2016年', prize: '安博通之星', type: 1 },
    { name: '肖千', year: '2019年', prize: '最佳测试奖', type: 1 },
    { name: '辛豆', year: '2018年', prize: '最佳测试奖', type: 1 },
    { name: '徐鹤', year: '2017、2019年', prize: '最佳支撑奖、最佳产品经理奖', type: 1 },
    { name: '徐笑', year: '2019年', prize: '年度敬业奖', type: 1 },
    { name: '许天奇', year: '2020年', prize: '最佳支撑奖', type: 1 },
    { name: '薛洪亮', year: '2016、2017年', prize: '最佳拓展奖、安博通之星', type: 1 },
    { name: '严文涛', year: '2019年', prize: '最佳产品经理奖', type: 1 },
    { name: '杨帆', year: '2014年', prize: '年度敬业奖', type: 1 },
    { name: '杨晓军', year: '2015、2020年', prize: '最佳维护奖、最佳拓展奖', type: 1 },
    { name: '尹志勇', year: '2017、2020年', prize: '最佳测试奖、最佳测试奖', type: 1 },
    { name: '袁升', year: '2020年', prize: '最佳开发奖', type: 1 },
    { name: '袁泽', year: '2017、2018、2019年', prize: '最佳支撑奖、最佳拓展奖、最佳拓展奖', type: 1 },
    { name: '翟世兴', year: '2019年', prize: '最佳开发奖', type: 1 },
    { name: '张海华', year: '2018、2019年', prize: '最佳拓展奖、最佳拓展奖', type: 1 },
    { name: '张强', year: '2014、2020年', prize: '最佳维护奖、最佳测试奖', type: 1 },
    { name: '张青', year: '2020年', prize: '年度敬业奖', type: 1 },
    { name: '张顺涛', year: '2018年', prize: '最佳新人奖', type: 1 },
    { name: '张婷婷', year: '2020年', prize: '最佳开发奖', type: 1 },
    { name: '张鑫', year: '2016年', prize: '年度敬业奖', type: 1 },
    { name: '张洋', year: '2020年', prize: '最佳开发奖', type: 1 },
    { name: '张中秋', year: '2020年', prize: '最佳新人奖', type: 1 },
    { name: '赵亚林', year: '2020年', prize: '最佳测试奖', type: 1 },
    { name: '周浩', year: '2014、2016年', prize: '最佳开发奖、最佳支撑奖', type: 1 },
    { name: '周伊凡', year: '2016年', prize: '最佳新人奖', type: 1 },
    { name: '朱善亮', year: '2018年', prize: '最佳支撑奖', type: 1 },
    { name: '左福龙', year: '2017年', prize: '最佳测试奖', type: 1 },

    { name: '何勇', year: '2021/1/4', type: 2 },
    { name: '张子林', year: '2021/1/7', type: 2 },
    { name: '谭代瑞', year: '2021/1/11', type: 2 },
    { name: '李飞', year: '2021/1/25', type: 2 },
    { name: '杜猛亮', year: '2021/2/3', type: 2 },
    { name: '罗松涛', year: '2021/3/1', type: 2 },
    { name: '余昌平', year: '2021/3/3', type: 2 },
    { name: '王玉林', year: '2021/3/8', type: 2 },
    { name: '刘城钰', year: '2021/3/15', type: 2 },
    { name: '吕锋', year: '2021/3/17', type: 2 },
    { name: '刘铁龙', year: '2021/3/19', type: 2 },
    { name: '刘富根', year: '2021/3/22', type: 2 },
    { name: '邹鹏', year: '2021/3/24', type: 2 },
    { name: '赵开丰', year: '2021/3/25', type: 2 },
    { name: '周彦杰', year: '2021/3/29', type: 2 },
    { name: '杨喆', year: '2021/3/31', type: 2 },
    { name: '高贵冉', year: '2021/4/1', type: 2 },
    { name: '李梦月', year: '2021/4/1', type: 2 },
    { name: '李仁杰', year: '2021/4/6', type: 2 },
    { name: '汪灿', year: '2021/4/6', type: 2 },
    { name: '王海泉', year: '2021/4/6', type: 2 },
    { name: '徐渺', year: '2021/4/6', type: 2 },
    { name: '张俊峰', year: '2021/4/6', type: 2 },
    { name: '曾涛', year: '2021/4/7', type: 2 },
    { name: '邓志福', year: '2021/4/12', type: 2 },
    { name: '王昂', year: '2021/4/12', type: 2 },
    { name: '周木华', year: '2021/4/14', type: 2 },
    { name: '姚金花', year: '2021/4/19', type: 2 },
    { name: '张贵昌', year: '2021/4/19', type: 2 },
    { name: '朱德金', year: '2021/4/19', type: 2 },
    { name: '饶文', year: '2021/4/21', type: 2 },
    { name: '陈志华', year: '2021/4/22', type: 2 },
    { name: '蒋思强', year: '2021/4/25', type: 2 },
    { name: '金佳丽', year: '2021/4/26', type: 2 },
    { name: '叶华阳', year: '2021/4/27', type: 2 },
    { name: '陈敏', year: '2021/5/6', type: 2 },
    { name: '刘少华', year: '2021/5/6', type: 2 },
    { name: '王星惠', year: '2021/5/6', type: 2 },
    { name: '范小乐', year: '2021/5/7', type: 2 },
    { name: '李岚', year: '2021/5/10', type: 2 },
    { name: '彭丽', year: '2021/5/10', type: 2 },
    { name: '张蒙蒙', year: '2021/5/10', type: 2 },
    { name: '张帅', year: '2021/5/10', type: 2 },
    { name: '周鹏', year: '2021/5/10', type: 2 },
    { name: '方嘉溪', year: '2021/5/13', type: 2 },
    { name: '魏亮亮', year: '2021/5/17', type: 2 },
    { name: '吴迪', year: '2021/5/17', type: 2 },
    { name: '张瑞荣', year: '2021/5/17', type: 2 },
    { name: '肖俊', year: '2021/5/18', type: 2 },
    { name: '王森', year: '2021/5/20', type: 2 },
    { name: '桂放', year: '2021/5/24', type: 2 },
    { name: '郝思宇', year: '2021/5/24', type: 2 },
    { name: '孙伟', year: '2021/5/24', type: 2 },
    { name: '胡彬', year: '2021/5/26', type: 2 },
    { name: '王小松', year: '2021/6/1', type: 2 },
    { name: '夏海强', year: '2021/6/1', type: 2 },
    { name: '徐嘉', year: '2021/6/1', type: 2 },
    { name: '朱华林', year: '2021/6/1', type: 2 },
    { name: '贺淼洋', year: '2021/6/3', type: 2 },
    { name: '常恺', year: '2021/6/7', type: 2 },
    { name: '白清榕', year: '2021/6/9', type: 2 },
    { name: '郭晋', year: '2021/6/9', type: 2 },
    { name: '邓佳恒', year: '2021/6/11', type: 2 },
    { name: '沈立超', year: '2021/6/15', type: 2 },
    { name: '明廷河', year: '2021/6/21', type: 2 },
    { name: '吴震天', year: '2021/6/21', type: 2 },
    { name: '晏路', year: '2021/6/22', type: 2 },
    { name: '刘晓鸣', year: '2021/6/24', type: 2 },
    { name: '蔡淼晶', year: '2021/7/1', type: 2 },
    { name: '黄超玉', year: '2021/7/1', type: 2 },
    { name: '刘奔', year: '2021/7/1', type: 2 },
    { name: '史新宽', year: '2021/7/1', type: 2 },
    { name: '宋益浩', year: '2021/7/1', type: 2 },
    { name: '王坤', year: '2021/7/1', type: 2 },
    { name: '闫奇', year: '2021/7/1', type: 2 },
    { name: '张秋生', year: '2021/7/1', type: 2 },
    { name: '钟豪灵', year: '2021/7/1', type: 2 },
    { name: '董晓宇', year: '2021/7/5', type: 2 },
    { name: '李林', year: '2021/7/5', type: 2 },
    { name: '代翊衡', year: '2021/7/7', type: 2 },
    { name: '宋台星', year: '2021/7/7', type: 2 },
    { name: '张雨青', year: '2021/7/9', type: 2 },
    { name: '王思卷', year: '2021/7/13', type: 2 },
    { name: '李贵胜', year: '2021/7/14', type: 2 },
    { name: '曾佑豪', year: '2021/7/20', type: 2 },
    { name: '华元', year: '2021/7/26', type: 2 },
    { name: '刘杰', year: '2021/7/26', type: 2 },
    { name: '邓潇', year: '2021/8/2', type: 2 },
    { name: '栗百功', year: '2021/8/2', type: 2 },
    { name: '谭金桃', year: '2021/8/2', type: 2 },
    { name: '张明', year: '2021/8/2', type: 2 },
    { name: '郝政', year: '2021/8/4', type: 2 },
    { name: '邱浩', year: '2021/8/10', type: 2 },
    { name: '曹晨光', year: '2021/8/13', type: 2 },
    { name: '但晨', year: '2021/8/16', type: 2 },
    { name: '刘洋洋', year: '2021/8/16', type: 2 },
    { name: '孙传彪', year: '2021/8/16', type: 2 },
    { name: '翟志良', year: '2021/8/16', type: 2 },
    { name: '张成昊', year: '2021/8/17', type: 2 },
    { name: '周雪林', year: '2021/8/17', type: 2 },
    { name: '周漪', year: '2021/8/23', type: 2 },
    { name: '周坦立', year: '2021/8/25', type: 2 },
    { name: '王晶晶', year: '2021/9/1', type: 2 },
    { name: '王伯', year: '2021/9/1', type: 2 },
    { name: '李春霖', year: '2021/9/1', type: 2 },
    { name: '刘娇娇', year: '2021/9/1', type: 2 },
    { name: '成明', year: '2021/9/1', type: 2 },
    { name: '吴建业', year: '2021/9/1', type: 2 },
    { name: '张志龙', year: '2021/9/6', type: 2 },
    { name: '金涛', year: '2021/9/7', type: 2 },
    { name: '刘晓敏', year: '2021/9/8', type: 2 },
    { name: '戴莹', year: '2021/9/8', type: 2 },
    { name: '程子琪', year: '2021/9/8', type: 2 },
    { name: '刘施镭', year: '2021/9/9', type: 2 },
    { name: '韩华伟', year: '2021/9/9', type: 2 },
    { name: '吴书航', year: '2021/9/9', type: 2 },
    { name: '谭吨', year: '2021/9/9', type: 2 },
    { name: '程思逸', year: '2021/9/9', type: 2 },
    { name: '李欣', year: '2021/9/10', type: 2 },
    { name: '陈姝琦', year: '2021/9/10', type: 2 },
    { name: '陈晨', year: '2021/9/13', type: 2 },
    { name: '于熙冬', year: '2021/9/13', type: 2 },
    { name: '付杨', year: '2021/9/15', type: 2 },
    { name: '李佳', year: '2021/9/18', type: 2 },
    { name: '宋青松', year: '2021/9/23', type: 2 },
    { name: '辛朋涛', year: '2021/9/23', type: 2 },
    { name: '邓娟', year: '2021/9/29', type: 2 },
    { name: '陈慧', year: '2021/10/8', type: 2 },
    { name: '宋浩楠', year: '2021/10/8', type: 2 },
    { name: '黄宇轩', year: '2021/10/8', type: 2 },
    { name: '张译尹', year: '2021/10/8', type: 2 },
    { name: '刘一鸣', year: '2021/10/11', type: 2 },
    { name: '孙爽函', year: '2021/10/11', type: 2 },
    { name: '丁艳娇', year: '2021/10/12', type: 2 },
    { name: '袁漫漫', year: '2021/10/14', type: 2 },
    { name: '邵平炜', year: '2021/10/15', type: 2 },
    { name: '刘婧姝', year: '2021/10/18', type: 2 },
    { name: '潘广荣', year: '2021/10/18', type: 2 },
    { name: '万艳鹏', year: '2021/10/20', type: 2 },
    { name: '陈津', year: '2021/10/20', type: 2 },
    { name: '李东晔', year: '2021/10/25', type: 2 },
    { name: '刘军', year: '2021/10/25', type: 2 },
    { name: ' 张恒', year: '2021/10/26', type: 2 },

    { name: '涂志刚', product: 'UI页面', type: 3 },
    { name: '马岩', product: 'UI页面', type: 3 },
    { name: '吕晓玉', product: 'UI页面', type: 3 },
    { name: '景志华', product: 'UI页面', type: 3 },
    { name: '柳泳', product: 'UI页面', type: 3 },
    { name: '詹晓', product: '防火墙产品', type: 3 },
    { name: '陈鑫', product: '防火墙产品', type: 3 },
    { name: '王传杰', product: '防火墙产品', type: 3 },
    { name: '江攀', product: '防火墙产品', type: 3 },
    { name: '武安星', product: '防火墙产品', type: 3 },
    { name: '蒋丽', product: '防火墙产品', type: 3 },
    { name: '吴佳', product: '防火墙产品', type: 3 },
    { name: '林牧翰', product: '可视化产品', type: 3 },
    { name: '刘昌豪', product: '可视化产品', type: 3 },
    { name: '刘慧', product: '可视化产品', type: 3 },
    { name: '刘文鹏', product: '可视化产品', type: 3 },
    { name: '夏勇', product: '可视化产品', type: 3 },
    { name: '裴德豪', product: '可视化产品', type: 3 },
    { name: '穆元凌', product: '可视化产品', type: 3 },
    { name: '黄伟', product: '可视化产品', type: 3 },
    { name: '曾成', product: '可视化产品', type: 3 },
    { name: '程展', product: '可视化产品', type: 3 },
    { name: '赵崇石', product: '网关产品', type: 3 },
    { name: '赵刊', product: '网关产品', type: 3 },
    { name: '梁世颍', product: '网关产品', type: 3 },
    { name: '王文鲁', product: '网关产品', type: 3 },
    { name: '李化森', product: '网关产品', type: 3 },
    { name: '张晓东', product: '网关产品', type: 3 },
    { name: '龙光武', product: '网关产品', type: 3 },
    { name: '莫冰', product: '网关产品', type: 3 },
    { name: '张欢', product: '网关产品', type: 3 },
    { name: '刘娜', product: '网关产品', type: 3 },
    { name: '靖娟娟', product: '网关产品', type: 3 },
    { name: '乔峰亮', product: '网关产品', type: 3 },
    { name: '王涛', product: '流量产品', type: 3 },
    { name: '郑文军', product: '流量产品', type: 3 },
    { name: '方翔', product: '流量产品', type: 3 },
    { name: '刘煜', product: '流量产品', type: 3 },
    { name: '朱光原', product: '流量产品', type: 3 },

    { name: '高琦', time: '2011/11/7', type: 4 },
    { name: '陈进光', time: '2012/11/28', type: 4 },
    { name: '臧家璇', time: '2012/12/20', type: 4 },
    { name: '钟竹', time: '2013/1/1', type: 4 },
    { name: '夏振富', time: '2015/12/1', type: 4 },
    { name: '王峥', time: '2017/3/21', type: 4 },
    { name: '马文蕾', time: '2017/4/10', type: 4 },
    { name: '仰文萍', time: '2017/5/22', type: 4 },
    { name: '杨明锚', time: '2017/8/2', type: 4 },
    { name: '邓娜', time: '2017/9/1', type: 4 },
    { name: '胡迪', time: '2017/9/25', type: 4 },
    { name: '谭福兴', time: '2017/10/9', type: 4 },
    { name: '马洁', time: '2018/1/4', type: 4 },
    { name: '吕东亮', time: '2018/2/1', type: 4 },
    { name: '李亚玲', time: '2018/3/5', type: 4 },
    { name: '张建文', time: '2018/3/5', type: 4 },
    { name: '王盈盈', time: '2018/3/12', type: 4 },
    { name: '刘 娜', time: '2018/4/10', type: 4 },
    { name: '唐力', time: '2018/4/11', type: 4 },
    { name: '张波', time: '2018/5/2', type: 4 },
    { name: '张铅', time: '2018/7/1', type: 4 },
    { name: '杨庭剑', time: '2018/7/10', type: 4 },
    { name: '卢华夏', time: '2018/7/23', type: 4 },
    { name: '庄茉', time: '2018/8/1', type: 4 },
    { name: '王欣', time: '2018/8/15', type: 4 },
    { name: '李明', time: '2018/11/6', type: 4 },
    { name: '宋天茂', time: '2019/5/7', type: 4 },
    { name: '宋晓勇', time: '2019/6/3', type: 4 },
    { name: '毛盛兴', time: '2019/6/17', type: 4 },
    { name: '孙文娟', time: '2019/6/17', type: 4 },
    { name: '周婵', time: '2019/6/19', type: 4 },
    { name: '陈婷丽', time: '2019/8/5', type: 4 },
    { name: '陈卓', time: '2019/9/9', type: 4 },
    { name: '雷艳', time: '2019/9/16', type: 4 },
    { name: '苏枫', time: '2019/9/23', type: 4 },
    { name: '杜薇', time: '2019/10/12', time_end: '548', type: 4 },
    { name: '翁俊', time: '2019/11/4', type: 4 },
    { name: '王秋颖', time: '2019/11/4', type: 4 },
    { name: '檀进波', time: '2019/11/11', type: 4 },
    { name: '甘安兴', time: '2019/11/18', type: 4 },
    { name: '陈亮', time: '2019/11/18', type: 4 },
    { name: '胡吉星', time: '2019/11/25', type: 4 },
    { name: '郑伟', time: '2019/11/25', type: 4 },
    { name: '陈山', time: '2020/1/2', type: 4 },
    { name: '梅冰妍', time: '2020/4/1', type: 4 },
    { name: '郑雪言', time: '2020/4/24', type: 4 },
    { name: '朱宇', time: '2020/5/4', type: 4 },
    { name: '曹渭清', time: '2020/5/25', type: 4 },
    { name: '刘贺旭', time: '2020/6/1', type: 4 },
    { name: '陆浩杰', time: '2020/7/1', type: 4 },
    { name: '何涵悦', time: '2020/7/1', type: 4 },
    { name: '何文玉', time: '2020/7/1', type: 4 },
    { name: '林君岩', time: '2020/7/1', type: 4 },
    { name: '杨松涛', time: '2020/7/1', type: 4 },
    { name: '张启', time: '2020/7/9', type: 4 },
    { name: '石红', time: '2020/7/20', type: 4 },
    { name: '韩鑫', time: '2020/7/28', type: 4 },
    { name: '常永锦', time: '2020/8/17', type: 4 },
    { name: '赵策', time: '2020/9/1', type: 4 },
    { name: '周珊珊', time: '2020/9/3', type: 4 },
    { name: '冉茜', time: '2020/9/9', type: 4 },
    { name: '赵虎', time: '2020/9/9', type: 4 }
  ]

  // TODO 在这里定义页面路径
  var hrefList = {
    '1': 'awardee.html', // 获奖人页面
    '2': 'employee.html', // 新员工页面
    '3': 'development.html', // 研发人页面
    '4': 'oldstaff.html' // 老员工页面
  }

  var isShow = false
  var searchInput = document.getElementById('searchInput')
  var searchButton = document.getElementById('searchButton')
  var item = null
  searchButton.addEventListener('click', function (e) {
    if (isShow) return

    var name = searchInput.value.trim()
    for (var i = 0; i < posterList.length; i++) {
      if (posterList[i].name === name) {
        item = posterList[i]
        break
      }
    }

    if (item) {
      var querys = queryString(item)
      jumpPage(item.type, querys)
    } else {
      showToast()
    }
  }, false)

  // 弹出toast
  function showToast() {
    isShow = true
    var toast = document.getElementById('toast')

    toast.style.display = 'block'
    setTimeout(function () {
      toast.style.display = 'none'
      isShow = false
    }, 2000)
  }

  // 跳转页面
  function jumpPage(type, query) {
    var href = hrefList[type]
    window.location = href + '?' + encodeURIComponent(query)
  }

  // 拼接地址参数
  function queryString(data) {
    var str = ''
    for (var key in data) {
      str += key + '=' + data[key] + '&'
    }

    return str.substring(0, str.length - 1)
  }
}())
