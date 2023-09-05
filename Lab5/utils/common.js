//模拟新闻数据
const news = [
  {id: '264698',
  title: '“烽烟号角——《晋察冀画报》摄影文献展”在中国人民抗日战争纪念馆开展',
  poster: 'https://imgculture.gmw.cn/attachement/jpg/site2/20230904/f44d30758a69265f7c8956.jpg',
  content: ' 9月3日，参观者在中国人民抗日战争纪念馆观看“烽烟号角——《晋察冀画报》摄影文献展”。当日，为纪念中国人民抗日战争暨世界反法西斯战争胜利78周年，“烽烟号角——《晋察冀画报》摄影文献展”在中国人民抗日战争纪念馆隆重揭幕。展出的摄影作品带领人们重温中华民族抗战的光辉历史，感悟伟大抗战精神，汲取奋进新时代的磅礴力量。',
  add_date: '2023-09-04'},
  {id: '304083',
  title: '重体验，享沉浸——数字科技助力中国旅游产业转型升级',
  poster: 'https://imgtech.gmw.cn/attachement/jpg/site2/20230904/2cf05d3dca85265f7e9602.jpg',
  content: ' 新华社天津9月3日电（记者栗雅婷、宋瑞）头戴VR设备，脚踩单车，游客仿佛置身海河沿岸，可以一边骑行一边欣赏海河风光；“任意门”轻轻一拉，美丽景致“扑面而来”……正在中国天津举行的第十三届中国旅游产业博览会上，数字技术加持的文旅产业“科技范儿”十足。在中国旅游业加速复苏背景下，数字服务、旅游智能装备、旅游智慧管理等最新应用全面勾勒出智慧旅游的新图景。在不少参展商看来，今年以来，以沉浸式、体验式旅游为代表的旅游新业态不断涌现，展现了旅游消费新趋势，推动了旅游产业转型升级。',
  add_date: '2023-09-04'},
  {id: '305670',
  title: '【2023中国经济半年报】十组数据看上半年中国经济澎湃活力',
  poster: 'https://imgeconomy.gmw.cn/attachement/jpg/site2/20230718/f44d30758a2f26203d3b08.jpg',
  content: '国家统计局7月17日发布的上半年国民经济运行数据显示，今年上半年，我国经济整体恢复向好，经济运行整体呈现回升向好态势。今年以来，随着经济社会全面恢复常态化运行，稳增长、稳就业、稳物价政策效应逐步显现，市场需求逐步恢复，生产供给持续增加，就业形势总体稳定，民生保障有力有效，发展质量继续提高，国民经济恢复向好。',
  add_date: '2023-07-17'}
];

//获取新闻列表
function getNewsList() {
  let list = [];
  for (var i = 0; i < news.length; i++) {
    let obj = {};
    obj.id = news[i].id;
    obj.poster = news[i].poster;
    obj.add_date = news[i].add_date;
    obj.title = news[i].title;
    list.push(obj);
  }
  return list; //返回新闻列表
}

//获取新闻内容
function getNewsDetail(newsID) {
  let msg = {
    code: '404', //没有对应的新闻
    news: {}
  };
  for (var i = 0; i < news.length; i++) {
    if (newsID == news[i].id) { //匹配新闻id编号
      msg.code = '200'; //成功
      msg.news = news[i]; //更新当前新闻内容
      break;
    }
  }
  return msg; //返回查找结果
}

// 对外暴露接口
module.exports = {
  getNewsList: getNewsList,
  getNewsDetail: getNewsDetail
}