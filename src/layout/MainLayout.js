import React from 'react'
import { Layout } from 'antd'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

const {Header, Footer, Content} = Layout

const MainLayout = ({children}) => {
  return (
    <Layout>
      <Header>
        <TheHeader/>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <TheFooter/>
      </Footer>
    </Layout>
  )
}

export default MainLayout