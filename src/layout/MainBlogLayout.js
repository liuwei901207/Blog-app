import React from 'react'
import { Layout } from 'antd'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

const {Header, Footer, Content} = Layout

const MainBlogLayout = ({children}) => {
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

export default MainBlogLayout