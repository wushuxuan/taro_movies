import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image,Video } from '@tarojs/components'
import './movies.css'
import '../../app.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '电影详情'
  }
  state={
    movies_desc:[
      {url:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',start:5,nonestart:0,startTitle:'10.0',title:'银翼杀手2049',auther:'路易斯·莱特里尔',date:'美国 2013'},
    ],
    describe:'二十一世纪初，泰勒公司先进机器人发展到了连锁阶段，那些机器人实际上和人类完全相同，被称为复制人，这些复制人在体力、敏捷度和智慧上都不错，被人类用于外世界从事奴隶的劳动、危险的探险工作及其他星球的殖民任务上，经过外界殖民地连锁六号战斗组的血腥暴动后，地球上宣布复制人为违法物——必须处死。特勤小组——银翼杀手受命侦查任何入侵复制人，并予以击毙。那不.',
    movies_people:[
      {name:'瑞恩·高斯林',ava:'http://img31.mtime.cn/ph/2013/01/05/152813.48086593_58X58.jpg',role:''},
      {name:'哈里森·福特',ava:'http://img31.mtime.cn/mg/2015/04/17/091208.68384854_58X58X4.jpg',role:''},
      {name:'安娜·德·阿玛斯',ava:'http://img31.mtime.cn/ph/2015/12/28/112732.94514398_58X58.jpg',role:''},
      {name:'杰瑞德·莱托',ava:'http://img31.mtime.cn/ph/2014/03/19/144518.84122163_58X58.jpg',role:''},
      {name:'更多',ava:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153068732390470924',role:''},
    ],
    aboutList:[
      {id:1,imgUrl:'http://img.hb.aicdn.com/63cc85ee6f00e0b625bc62903f1bff1bde4321fd3d034-feTfii_fw658'},
      {id:2,imgUrl:'http://img.hb.aicdn.com/ec6044ad30fac1e1557dfb43b23781ea63e1b6ad18147-CtIZ79_fw658'},
      {id:4,imgUrl:'http://77fkxu.com1.z0.glb.clouddn.com/20171028/1509157263_73347.jpg'}
    ],
    videoStyle:'display:none;',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  OpenVideo = ()=>{
    this.setState({
      videoSrc:'http://v11-tt.ixigua.com/9870ce089dc2dc5aff8927246f498f3b/5b3c86e5/video/m/22047ff5ee3cee6456c9c9d7059e496ff7211526dcf0000452c08e2f78a/',
      videoStyle:'display:block;'
    })
    this.videoContext = wx.createVideoContext('myVideo');
    this.videoContext.requestFullScreen({});
  }

  render () {
    const {movies_desc,describe,movies_people,videoSrc,videoStyle} = this.state;
    return (
      <View className='container'>
        {
          movies_desc.map((item)=>
          <View class="img_view">
            <Image mode="widthFix" src={item.url} class="slide-image" />
            <View class="img_bottom">
              <View class="img_title">{item.title}</View>
              <View class="img_start">
                {item.start.map((icon)=>
                  <Image style="width:10px;height:10px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025342143661509"/>
                )}
                {item.nonestart.map((icon)=>
                  <image style="width:10px;height:10px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025412960363085"/>
                )}
                <Text>{item.startTitle}</Text>
              </View>
              <View class="img_auther">{item.auther}</View>
              <View class="img_auther">{item.date}</View>
            </View>
            <View class="movies_button" onClick={this.OpenVideo}>立即播放</View>
          </View>
        )}

        <View class="movies_describe">{describe}</View>

        <View class="index_content">
          <View class="index_title" style="margin:22px 0px 12px;">演职人员</View>
          <View class="index_prople_List">
            {movies_people.map((item)=>
              <View class="index_prople_List_flex">
                <Image src={item.ava}/>
                <View class="index_prople_List_flex_text">{item.name}</View>
              </View>
            )}
          </View>
        </View>

        <View class="index_content">
          <View class="index_title" style="margin:22px 0px 12px;">视频剧照</View>
          <View class="free-WaterfallFlow">
            {
              aboutList.map((item)=>
                <Block>
                  <View class="flex-wrap">
                    <Image style={item.id%2?'':'display:none;'} mode="widthFix" src={item.imgUrl}></Image>
                    <Image style={item.id%2?'display:none;':''}  mode="widthFix" src={item.imgUrl}></Image>
                  </View>
                </Block>
            )}
          </View>
        </View>

        <View class="movies_content" style={videoStyle}>
          <Video  id="myVideo" autoplay src={videoSrc}  controls ></Video>
        </View>
      </View>
    )
  }
}
