import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Icon, Tag } from 'antd'

import styles from './index.css'

const PostListItem = (props) => {

  const {title, subtitle, publishDate, header_img, content, created_at, updated_at} = props

  return (
    <div className={styles['post-list-item']}>
      <a className={styles['post-list-item__title']}>
        <span>{title}</span>
      </a>

      <div className={styles['post-list-item__content']}>

        <div className="abstract-preview">
          <ReactMarkdown className="markdown-container" source={content}/>
        </div>

        <div className={styles['abstract-meta']}>
          <div className="abstract-meta__date">
            <span className="abstract-time"><Icon type="calendar"/>  发表于 {publishDate}</span>
          </div>

          <div className="abstract-meta__categories">
            分类：
            <a href="#">
              <Icon type="folder"/> Vue开发
            </a>
          </div>
        </div>

        <div className={styles['abstract-meta']}>
          <div className="abstract-meta__categories">
            <Tag color="#f75357">magenta</Tag>
            <Tag color="#f75357">red</Tag>
            <Tag color="#f75357">volcano</Tag>
            <Tag color="#f75357">orange</Tag>
            <Tag color="#f75357">gold</Tag>
            <Tag color="#f75357">lime</Tag>
            <Tag color="#f75357">green</Tag>
            <Tag color="#f75357">cyan</Tag>
            <Tag color="#f75357">blue</Tag>
            <Tag color="#f75357">geekblue</Tag>
            <Tag color="#f75357">purple</Tag>
          </div>
        </div>

        <div className="read-more">阅读全文 &gt;&gt;</div>

      </div>
    </div>
  )
}

export default PostListItem