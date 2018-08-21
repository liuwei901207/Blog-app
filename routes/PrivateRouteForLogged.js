import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import AuthHelper from '../src/utils/authHelper'

////////////////////////////////////////////////////////////
// 通过 PrivateRouteForLogged.js 包裹的路由为私有路由，提供登录校验功能

class PrivateRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuthenticated: !!AuthHelper.getToken(),
    }
  }
  render () {
    let {render, ...rest} = this.props

    // 如果访问的是登录页面
    if (this.props.location.pathname === '/login') {
      return this.state.isAuthenticated ? (<Redirect
        to={{
          pathname: '/admin',
          state: {from: this.props.location},
        }}
      />) : (
        <Route
          {...rest}
          render={props =>
            <div>
              {
                render(props)
              }
            </div>
          }
        />
      )
    }

    // 如果访问的是后台页面
    else {
      return this.state.isAuthenticated ? (
        <Route
          {...rest}
          render={props =>
            <div>
              {
                render(props)
              }
            </div>
          }
        />
      ) : (<Redirect
        to={{
          pathname: '/login',
          state: {from: this.props.location},
        }}
      />)
    }
  }
}

export default withRouter(PrivateRoute)
