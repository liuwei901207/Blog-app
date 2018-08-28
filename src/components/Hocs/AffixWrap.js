import React from 'react'
import { Affix } from 'antd'

////////////////////////////////////////////////////////////
// 通过 AffixWrap.js 包裹的路由为私有路由，提供登录校验功能

export default (WrappedComponent) => {
  class AffixWrap extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        top: 50,
        browserWidth: 0,
      }
      this.handleWindowResize = this.handleWindowResize.bind(this)
    }

    componentWillMount () {
      this.handleWindowResize()
      window.addEventListener('resize', this.handleWindowResize)
    }
    componentWillUnmount () {
      window.removeEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize () {
      this.setState({
        browserWidth: document.documentElement.clientWidth || document.body.clientWidth,
      })
    }

    render () {
      // 判断浏览器宽度是否大于980，以显示affix图钉功能
      return this.state.browserWidth > 980 ? (
        <Affix offsetTop={this.state.top}>
          <WrappedComponent/>
        </Affix>
      ) : (
        <WrappedComponent/>
      )
    }
  }

  return AffixWrap
}