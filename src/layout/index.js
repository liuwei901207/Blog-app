import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withRouter from 'umi/withRouter'
import SimpleLayout from './SimpleLayout'
import MainBlogLayout from './MainBlogLayout'

export default withRouter(function (props) {
  if (props.location.pathname === '/login') {
    return (
      <SimpleLayout>
        <TransitionGroup>
          <CSSTransition key={props.location.key} classNames="fade" timeout={1000}>
            {props.children}
          </CSSTransition>
        </TransitionGroup>
      </SimpleLayout>
    )
  }

  return (
    <MainBlogLayout location={props.location} children={props.children}/>
  )
})