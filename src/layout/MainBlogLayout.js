import React from 'react'
import TheHeader from '../components/TheHeader'
import Index from '../components/TheFooter'

const MainBlogLayout = ({children}) => {
  return (
    <div className="site-body">
      <TheHeader/>
      <div className="site-wrapper">
        <div className="site-content">{children}</div>
        <Index/>
      </div>
    </div>
  )
}

export default MainBlogLayout