import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './message.css'
import '../../app.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '影力消息'
  }
  state={
    messageList:[
      {title:'通知',describe:'我有一件事通知你',iconPath:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153026154279519604',},
      {title:'粉丝',describe:'在亿万光年里我们相遇',iconPath:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153026180385015677',},
      {title:'喜欢',describe:'有趣的灵魂都在这里',iconPath:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153026189298512828',},
      {title:'收藏',describe:'再也不用遮遮掩掩了',iconPath:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153026198496436555',},
      {title:'评论',describe:'有时灵光一闪而过',iconPath:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153026204891027528',},
    ],
    messages:[
      {name:'影力星球总部',content:'亲爱的影友，你对电影的真知灼见已经成功引起了我的兴趣，很希望有机会可以和你一起探讨',ava:'http://www.qqw21.com/article/UploadPic/2012-11/2012111981221108.jpg',},
      {name:'林萌C',content:'请问你说的是我哪条评论呢?',ava:'http://up.qqjia.com/z/24/tu29237_3.jpg',},
    ],
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {messageList} = this.state;
    return (
      <View className='container'>
        <View class="message_list" style="margin-bottom:24px;">
          {
            messageList.map((item)=>
              <View class="message_list_item">
                <View>
                  <Image src={item.iconPath}/>
                </View>
                <View>
                  <View class="message_list_item_title">{item.title}</View>
                  <View class="message_list_item_describe">{item.describe}</View>
                </View>
              </View>
          )}
        </View>

        <View class="index_content">
          <View class="index_title">全部私信</View>
          <View class="index_direct_messages">
              {
                messages.map((item)=>
                <View class="message_list_flex">
                  <View><Image src={item.ava}/></View>
                  <View>
                    <View class="message_list_item_title">
                      <View>{item.name}</View>
                      <View>2018年3月18日</View>
                    </View>
                    <View class="message_list_item_describe">{item.content}</View>
                  </View>
                </View>
              )}
          </View>
        </View>
      </View>
    )
  }
}
