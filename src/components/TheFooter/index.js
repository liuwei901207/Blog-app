import React from 'react'

import styles from './index.css'

const TheFooterCps = () => {
  return (
    <div className={styles['site-footer']}>
      <div className={styles['site-footer__item']}>
        <span>本站由 @liuwei 创建 - 主题参考了 <a href="https://hexo.io/" target="_blank" rel="noopener noreferrer">Hexo</a></span>
        <span id="theme-info"> 的主题 <a href="https://github.com/fi3ework/hexo-theme-archer" target="_blank" rel="noopener noreferrer">Archer</a></span>
      </div>
      <div className={styles['site-footer__item']}>
        <span> © 2018. 粤ICP备17139665号-1 </span>
      </div>
      <div className={`${styles['site-footer__item']} ${styles['site-footer__item--pv']}`}>
        <span> PV: 50000 </span>
      </div>
    </div>
  )
}

export default TheFooterCps