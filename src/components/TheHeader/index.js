import React from 'react'
import { connect } from 'dva'
import { Icon } from 'antd'

import styles from './index.css'

const mockMenuTabs = [
  {name: '首页', iconType: 'home'},
  {name: '分类/标签', iconType: 'tags-o'},
  {name: '归档', iconType: 'switcher'},
  {name: '关于', iconType: 'user'},
  {name: '友链', iconType: 'link'},
  {name: '更多', iconType: 'appstore-o'},
]

class Index extends React.Component {

  // 初始化State
  constructor (props) {
    super(props)
    this.state = {
      menuTabs: props.menuTabs || mockMenuTabs,
    }
  }

  // 组件Dom
  render () {
    return (
      <header className={styles['site-header']}>
        <div className={`container ${styles['site-header__container']}`}>
          <div className={styles['site-header__logo']}>My React Blog</div>
          <ul className={styles['site-header__tabWrapper']}>
            {
              this.state.menuTabs.map(
                (menuTab) => (
                  <li className={styles['site-header__tabItem']}><Icon type={menuTab.iconType}/> {menuTab.name}</li>
                ))
            }
          </ul>
        </div>
      </header>
    )
  }
}

// 将model中的state变成组件的props
function mapStateToProps (state) {
  return {
    logged: !!state.auth.token,
  }
}

export default connect(mapStateToProps)(Index)