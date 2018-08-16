import React from 'react'
import SimpleLayout from './SimpleLayout'
import MainLayout from './MainLayout'

export default function (props) {
  if (props.location.pathname === '/login') {
    return <SimpleLayout children={props.children}/>
  }

  return (
    <MainLayout children={props.children}/>
  )
}