import React from 'react'
import { connect } from 'dva'

class Home extends React.Component {
  // 组件Dom
  render () {
    return (
      <div>
        admin
      </div>
    )
  }
}

// 将model中的state变成组件的props
function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(Home)