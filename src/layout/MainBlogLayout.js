import React from 'react'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import TheIntro from '../components/TheIntro'

const MainBlogLayout = ({children}) => {
  return (
    <div className="site-body">
      <TheHeader/>
      <div className="site-wrapper">

        <TheIntro/>

        <div className="site-content">{children}</div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default MainBlogLayout