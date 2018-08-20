import React from 'react'
import { connect } from 'dva'
import { Icon } from 'antd'

import styles from './index.css'

const mockMenuTabs = [
  {id: 1, name: '首页', iconType: 'home'},
  {id: 2, name: '分类/标签', iconType: 'tags-o'},
  {id: 3, name: '归档', iconType: 'switcher'},
  {id: 4, name: '关于', iconType: 'user'},
  {id: 5, name: '友链', iconType: 'link'},
  {id: 6, name: '更多', iconType: 'appstore-o'},
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
                  <li className={styles['site-header__tabItem']}
                      key={menuTab.id}
                  >
                    <Icon type={menuTab.iconType}/>
                    {menuTab.name}
                  </li>
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