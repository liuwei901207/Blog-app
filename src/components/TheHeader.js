import React from 'react'
import router from 'umi/router'
import { connect } from 'dva'

import { Button } from 'antd'

class TheHeader extends React.Component {

  // 初始化State
  constructor (props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  // 静态方法
  static linkToLogin () {
    router.push('/login')
  }

  // 定义事件
  handleLogout () {
    this.props.dispatch({
      type: 'auth/logout',
      payload: {},
    })
  }

  // 组件Dom
  render () {
    return (
      <div>
        {
          this.props.logged ? (
            <Button type="primary" icon="logout" onClick={this.handleLogout}>退出系统</Button>
          ) : (
            null
          )
        }
      </div>
    )
  }
}

// 将model中的state变成组件的props
function mapStateToProps (state) {
  return {
    logged: !!state.auth.token,
  }
}

export default connect(mapStateToProps)(TheHeader)