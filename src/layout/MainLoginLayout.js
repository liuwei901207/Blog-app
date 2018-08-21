import React from 'react'
import { Layout } from 'antd'

const {Content} = Layout

const SimpleLayout = ({children}) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  )
}

export default SimpleLayout