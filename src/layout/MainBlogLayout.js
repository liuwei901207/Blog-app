import React from 'react'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import TheIntro from '../components/TheIntro'
import TheProfile from '../components/TheProfile'

const MainBlogLayout = ({children}) => {
  return (
    <div>
      <TheHeader/>
      <div className="site-wrapper">

        <TheIntro/>

        <div className="container container-main">
          <div className="site-content__rightWrapper">
            <div className="site-content__right">
              <div className="inner-content">
                {children}
              </div>
            </div>
          </div>
          <div className="site-content__left">
            <TheProfile/>
          </div>
        </div>

        <TheFooter/>
      </div>
    </div>
  )
}

export default MainBlogLayout