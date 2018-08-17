import React from 'react'
import { connect } from 'dva'

import { Button } from 'antd'

class TheHeader extends React.Component {

  // 初始化State
  constructor (props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
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
        <Button type="primary" icon="logout" onClick={this.handleLogout}>退出系统</Button>
      </div>
    )
  }
}

// 将model中的state变成组件的props
function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(TheHeader)