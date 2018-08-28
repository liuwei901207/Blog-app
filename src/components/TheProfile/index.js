import React from 'react'
import Link from 'umi/link'
import AffixWrap from '../Hocs/AffixWrap'
import { Icon } from 'antd'

import styles from './index.css'

class TheIntroCps extends React.Component {

  // state 初始化
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }
  componentWillUnmount () {

  }

  render () {
    return (
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

        <div className={styles['site-profile-item']}>
          <Link to="/">首页</Link>
        </div>

        <div className={styles['site-profile-item']}>
          <Link to="/categories">分类</Link>
        </div>

        <div className={styles['site-profile-item']}>
          <Link to="/friends">友链</Link>
        </div>

        <div className={styles['site-profile-item']}>
          <Link to="/search">搜索</Link>
        </div>

        <div className={styles['site-profile-aboutMe']}>
          <Link to="/about">关于</Link>
        </div>

      </div>
    )
  }
}

export default AffixWrap(TheIntroCps)