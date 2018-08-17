import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import Auth from '../src/utils/auth'

////////////////////////////////////////////////////////////
// 通过 PrivateRoute.js 包裹的路由为私有路由，只有登录才能访问

class PrivateRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAuthenticated: !!Auth.getToken(),
    }
  }
  render () {
    let {render, ...rest} = this.props
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

export default withRouter(PrivateRoute)
