import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './pernal.css'
import '../../app.css'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '影力星球'
  }
  state={
      pernalList:[
        {imgUrl:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153061093852670638',title:'星球'},
        {imgUrl:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153061093831997274',title:'喜欢'},
        {imgUrl:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153061114170196032',title:'收藏'},
        {imgUrl:'http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153061114288451300',title:'下载'},
      ],
      watchList:[
        {imgUrl:'http://img.hb.aicdn.com/76209edea4d62e40e940c4e6eaa1ebf4c95cded184eb3-NOLuY4_fw658'},
        {imgUrl:'http://img.hb.aicdn.com/5e92c8120d1c558d7db0d11af7708eb9615f894813924-Lkn5Vw_fw658'},
        {imgUrl:'http://img.hb.aicdn.com/f83f85d2b630eac602a4fa247e1fef02d998a4de256ab-xHPNXi_fw658'},
        {imgUrl:'http://img.hb.aicdn.com/ee513cc72fe0157d9063dc6e8af7bfa03ca822e32675e-JplCOh_fw658'},
      ],
      aboutList:[
        {id:1,imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20171106/06880c6e063844e9a4104496240c9e0d.jpeg'},
        {id:2,imgUrl:'http://img.hb.aicdn.com/ec6044ad30fac1e1557dfb43b23781ea63e1b6ad18147-CtIZ79_fw658'},
        {id:4,imgUrl:'http://77fkxu.com1.z0.glb.clouddn.com/20171028/1509157263_73347.jpg'}
      ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {pernalList,watchList,aboutList} = this.state;
    return (
      <View className='container'>
        <View class="pernal_header">
          <View class="pernal_header_flex">
            <View class="index_content_comment_flex_ava"><image src="http://diuber-guanche.oss-cn-shanghai.aliyuncs.com/IMG153060884215701168"/></View>
          </View>
          <View class="pernal_header_right">
              <View class="pernal_header_right_flex_title">妖瞳婆婆</View>
              <View class="pernal_header_right_flex_number">
                <View class="pernal_header_right_flex_number_flex">
                  <View class="pernal_header_right_flex_number_flex_title">粉丝</View>
                  <View class="pernal_header_right_flex_number_flex_num">612</View>
                </View>
                <View class="pernal_header_right_flex_number_flex">
                  <View class="pernal_header_right_flex_number_flex_title">关注</View>
                  <View class="pernal_header_right_flex_number_flex_num">146</View>
                </View>
              </View>
          </View>
        </View>

        <View class="pernal_list">
          {
            pernalList.map((item)=>
            <View class="pernal_list_flex">
              <View class="pernal_list_flex_img"><image src={item.imgUrl}/></View>
              <View class="pernal_list_flex_title">{item.title}</View>
            </View>
          )}
        </View>

        <View class="pernal_content">
          <View class="index_title">观看历史</View>
           <View>
              <View class="pernal_content_view" style="margin-top:12px;" >
                {
                  watchList.map((item)=>
                  <View class="pernal_content_view_flex" >
                      <Image src={item.imgUrl}/>
                  </View>
                )}
              </View>
            </View>
        </View>

        <View class="pernal_content" style="margin-top:24px;">
          <View class="index_title">我的话题</View>
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

      </View>
    )
  }
}
