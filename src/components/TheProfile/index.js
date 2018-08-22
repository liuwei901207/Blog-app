import React from 'react'
import { Icon, Affix } from 'antd'

import styles from './index.css'

class TheIntroCps extends React.Component {
  state = {
    top: 10,
  }

  render () {
    return (
      <Affix offsetTop={this.state.top}>
        <div className={styles['site-profile']}>

          <img className={styles['site-profile__avatar']} src={require('../../assets/images/avator.jpg')} alt="头像"/>

          <div className={styles['site-profile__name']}>fi3ework</div>

          <div className={styles['site-profile-signature']}>
            witness me
          </div>

          <div className={styles['site-profile-social']}>
            <a href="mailto:116402157@qq.com" title="email">
              <Icon className={styles['site-profile__icon']} type="mail"/>
            </a>
            <a href="https://github.com/fi3ework" title="github">
              <Icon className={styles['site-profile__icon']} type="github"/>
            </a>
            <a href="https://github.com/fi3ework" title="wechat">
              <Icon className={styles['site-profile__icon']} type="wechat"/>
            </a>
          </div>

          <div className={styles['site-profile-aboutMe']}>
            <a href="/archer-demo/about">ABOUT ME</a>
          </div>
        </div>
      </Affix>
    )
  }
}

export default TheIntroCps