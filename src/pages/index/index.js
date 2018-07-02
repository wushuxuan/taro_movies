import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import '../../app.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '影力星球'
  }
  state={
   imgUrls: [
      {url:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658',start:5,nonestart:0,startTitle:'10.0',title:'银翼杀手2049',auther:'路易斯·莱特里尔',date:'美国 2013'},
      {url:'http:////img.hb.aicdn.com/e147d4d3782845bf8c5973f0292edce45794bf3427ebf-8G2w3J_fw658',start:4,nonestart:1,startTitle:'8.0',title:'一念无名',auther:'刘若英',date:'中国香港 2018'},
      {url:'http:////img.hb.aicdn.com/d8ef95cbabec89e6806e0199551a44adb62d6e84713bd-15alYc_fw236',start:3,nonestart:2,startTitle:'6.0',title:'归来',auther:'张艺谋',date:'中国内地 2014'},
      {url:'http:////img.hb.aicdn.com/3c4287cc12451bef09c5e85857e56a96ca57e31344f5e-16DQuH_fw236',start:5,nonestart:0,startTitle:'10.0',title:'Now You See Me',auther:'路易斯·莱特里尔',date:'美国 2013'},
    ],
    recommended_img:[
      'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025520945037409',
      'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025520921075491'
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {imgUrls,recommended_img} = this.state;
    return (
      <View className='container'>
        <View class="index_container">
          <View class="index_view"></View>
          <Swiper indicatorDots indicatorActiveColor="#ff3399">
            <block>
            {imgUrls.map((item)=>
              <Swiper-item>
                <View class="img_view">
                  <image src={item.url} class="slide-image" />
                  <View class="img_bottom">
                    <View class="img_title">{item.title}</View>
                    <View class="img_start">
                      {item.start.map((icon)=>
                        <image style="width:10px;height:10px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025342143661509"/>
                      )}
                      {item.nonestart.map((icon)=>
                        <image style="width:10px;height:10px;margin-right:5px;" src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153025412960363085"/>
                      )}
                      <Text>{item.startTitle}</Text>
                    </View>
                    <View class="img_auther">{item.auther}</View>
                    <View class="img_auther">{item.date}</View>
                  </View>
                </View>
              </Swiper-item>
            )}
            </block>
          </Swiper>
          <View class="index_view"></View>
        </View>

        <View class="index_content">
          <View class="index_title">热门推荐</View>
          <View class="index_recommended">
            {
              recommended_img.map((item)=>
                <Image lazyLoad src={item}/>
            )}
          </View>
        </View>
      </View>
    )
  }
}
