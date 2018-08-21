import React from 'react'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import TheIntro from '../components/TheIntro'

const MainBlogLayout = ({children}) => {
  return (
    <div>
      <TheHeader/>
      <div className="site-wrapper">

        <TheIntro/>

        <div className="container">
          <div className="site-content__left">
            1
          </div>
          <div className="site-content__rightWrapper">
            <div className="site-content__right">
              <div className="inner-content">
                {children}
              </div>
            </div>
          </div>
        </div>

        <TheFooter/>
      </div>
    </div>
  )
}

export default MainBlogLayout