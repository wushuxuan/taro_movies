import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.css'

class App extends Component {
  config = {
    pages: [
      'pages/pernal/pernal',
      'pages/message/message',
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1E1F33',
      navigationBarTitleText: '影力星球',
      navigationBarTextStyle: '#fff'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        iconPath:'./img/index.png',
        text:'首页',
        selectedIconPath: "./img/index_tv.png"
      },{
        pagePath: "pages/pernal/pernal",
        iconPath:'./img/panel.png',
        text:'动态',
        selectedIconPath: "./img/panel_tv.png"
      }, {
        pagePath: "pages/message/message",
        iconPath:'./img/xq.png',
        text:'消息',
        selectedIconPath: "./img/xq_tv.png"
      },{
        pagePath: "pages/pernal/pernal",
        iconPath:'./img/ge.png',
        text:'个人中心',
        selectedIconPath: "./img/ge_tv.png"
      }],
      backgroundColor:'#221F34',
      color: "#4C4C80",
      selectedColor: "#fff"
    },
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index></Index>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
