import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withRouter from 'umi/withRouter'
import MainLoginLayout from './MainLoginLayout'
import MainBlogLayout from './MainBlogLayout'

export default withRouter(function (props) {
  if (props.location.pathname === '/login') {
    return (
      <MainLoginLayout>
        <TransitionGroup>
          <CSSTransition key={props.location.key} classNames="fade" timeout={1000}>
            {props.children}
          </CSSTransition>
        </TransitionGroup>
      </MainLoginLayout>
    )
  }

  return (
    <MainBlogLayout location={props.location} children={props.children}/>
  )
})