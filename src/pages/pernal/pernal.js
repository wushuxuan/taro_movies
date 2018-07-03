import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './pernal.css'
import '../../app.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '影力星球'
  }
  state={
   CommentUrls: [
      {url:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',dt_date:'5月30日 23：05',
        start:5,nonestart:0,startTitle:'10.0',title:'银翼杀手2049',auther:'路易斯·莱特里尔',date:'美国 2013',desc:'科幻/惊悚',
        content:'作为一部续作在风格以及基调上表现出与原作惊人的统一，其作为一部独立的电影更是展现出了近几十年科幻领域都鲜有匹敌的优秀质量。'
      },{url:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',dt_date:'5月30日 23：05',
        start:5,nonestart:0,startTitle:'10.0',title:'银翼杀手2049',auther:'路易斯·莱特里尔',date:'美国 2013',desc:'科幻/惊悚',
        content:'作为一部续作在风格以及基调上表现出与原作惊人的统一，其作为一部独立的电影更是展现出了近几十年科幻领域都鲜有匹敌的优秀质量。'
      },{url:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',dt_date:'5月30日 23：05',
        start:5,nonestart:0,startTitle:'10.0',title:'银翼杀手2049',auther:'路易斯·莱特里尔',date:'美国 2013',desc:'科幻/惊悚',
        content:'作为一部续作在风格以及基调上表现出与原作惊人的统一，其作为一部独立的电影更是展现出了近几十年科幻领域都鲜有匹敌的优秀质量。'
      },
    ],
     CommentUrls1: [
        {url:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',dt_date:'5月30日 23：05',
          start:5,nonestart:0,startTitle:'10.0',title:'银翼杀手2049',auther:'路易斯·莱特里尔',date:'美国 2013',desc:'科幻/惊悚',
          content:'作为一部续作在风格以及基调上表现出与原作惊人的统一，其作为一部独立的电影更是展现出了近几十年科幻领域都鲜有匹敌的优秀质量。'
        }
      ],
    recommended_img:[
      'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025520945037409',
      'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025520921075491'
    ],
    CommentPeople: [
      {ava:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',name:'林萌C',zan:2869,},
      {ava:'http://img.hb.aicdn.com/76b4f807e213cd2ad1e0a636912ebd8a277fe36c8c6b-Rc8xik_sq140sf',name:'妖瞳婆婆',zan:4668,},
      {ava:'http://img.hb.aicdn.com/e1ce4f7a05e4972e511c6f1299d4db0472e2a9f2dc14-6EvgDu_sq320',name:'森染',zan:3060,},
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {CommentUrls,recommended_img,CommentPeople} = this.state;
    return (
      <View className='container'>
        <View class="comments">
          {
            CommentUrls1.map((item)=>
            <View class="comment_flex">
              <View class="comment_ava"><Image src="http://img1.touxiang.cn/uploads/20130626/26-054458_291.jpg"/></View>
              <View class="comment_view">
                <View class="comment_view_header">
                  <View class="comment_view_header_left">林萌C</View>
                  <View class="comment_view_header_right">
                    <View class="comment_view_header_text">给出评价</View>
                    <View class="img_start">
                      {item.start.map((icon)=>
                        <image style="width:11px;height:11px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025342143661509"/>
                      )}
                      {item.nonestart.map((icon)=>
                        <image style="width:11px;height:11px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025412960363085"/>
                      )}
                      <Text>{item.startTitle}</Text>
                    </View>
                  </View>
                </View>
                <View class="comment_view_content">{item.content}</View>
                <View class="comment_view_movies">
                  <view class="comment_view_movies_left">
                    <image src={item.url}/>
                  </view>
                  <view class="comment_view_movies_right">
                    <view class="comment_view_movies_right_title">{item.title}</view>
                    <view class="comment_view_movies_right_text">{item.desc}</view>
                    <view class="comment_view_movies_right_text">{item.auther}</view>
                    <view class="comment_view_movies_right_text">{item.date}</view>
                    <view class="comment_view_movies_right_bottom_text">查看更多评论 ></view>
                  </view>
                </View>
                <View class="comment_view_bottom">
                  <View class="comment_view_bottom_date">{item.dt_date}</View>
                  <span class="iconfont icon-love"></span>
                  <span class="iconfont icon-comment"></span>
                  <span class="iconfont icon-startCollect"></span>
                  <span class="iconfont icon-share"></span>
                </View>
              </View>
            </View>
          )}
        </View>

        <View class="index_content">
          <View class="index_content_header">
            <View class="index_title">影友推荐</View>
            <View class="index_badge">换一批</View>
          </View>
          <View class="index_content_comment">
            {
              CommentPeople.map((item)=>
              <View class="index_content_comment_flex">
                <View class="index_content_comment_flex_ava"><image src={item.ava}/></View>
                <View class="index_content_comment_flex_title">{item.name}</View>
                <View class="index_content_comment_flex_zan">获得{item.zan}个赞</View>
                <View class="index_content_comment_flex_guanzhu">关注</View>
              </View>
            )}
          </View>

        </View>

        <View class="comments">
          {
            CommentUrls.map((item)=>
            <View class="comment_flex">
              <View class="comment_ava"><Image src="http://img1.touxiang.cn/uploads/20130626/26-054458_291.jpg"/></View>
              <View class="comment_view">
                <View class="comment_view_header">
                  <View class="comment_view_header_left">林萌C</View>
                  <View class="comment_view_header_right">
                    <View class="comment_view_header_text">给出评价</View>
                    <View class="img_start">
                      {item.start.map((icon)=>
                        <image style="width:11px;height:11px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025342143661509"/>
                      )}
                      {item.nonestart.map((icon)=>
                        <image style="width:11px;height:11px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025412960363085"/>
                      )}
                      <Text>{item.startTitle}</Text>
                    </View>
                  </View>
                </View>
                <View class="comment_view_content">{item.content}</View>
                <View class="comment_view_movies">
                  <view class="comment_view_movies_left">
                    <image src={item.url}/>
                  </view>
                  <view class="comment_view_movies_right">
                    <view class="comment_view_movies_right_title">{item.title}</view>
                    <view class="comment_view_movies_right_text">{item.desc}</view>
                    <view class="comment_view_movies_right_text">{item.auther}</view>
                    <view class="comment_view_movies_right_text">{item.date}</view>
                    <view class="comment_view_movies_right_bottom_text">查看更多评论 ></view>
                  </view>
                </View>
                <View class="comment_view_bottom">
                  <View class="comment_view_bottom_date">{item.dt_date}</View>
                  <span class="iconfont icon-love"></span>
                  <span class="iconfont icon-comment"></span>
                  <span class="iconfont icon-startCollect"></span>
                  <span class="iconfont icon-share"></span>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    )
  }
}
