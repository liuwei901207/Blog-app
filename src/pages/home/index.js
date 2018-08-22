import React from 'react'
import PostListItem from './components/PostListItem'

const mockPosts = [
  {
    id: 1,
    title: 'hexo-theme-archer',
    // 文章简介
    subtitle: '',
    // 文章发布日期
    publishDate: '2018-12-13 18:03:30',
    // 文章封面图片
    header_img: 'http://firework.studio/archer-demo/2017-08-14/hexo-theme-archer/snap.png',
    // 文章内容
    content: '![](http://firework.studio/archer-demo/2017-08-14/hexo-theme-archer/snap.png)',
    created_at: '2018-12-13 18:03:30',
    updated_at: '2018-12-13 18:03:30',
  },
]

class Home extends React.Component {

  // 初始化State
  constructor (props) {
    super(props)
    this.state = {
      posts: props.posts || mockPosts,
    }
  }

  render () {
    return (
      <div>
        {
          this.state.posts.map(
            (post) => (
              <PostListItem
                key={post.id}
                title={post.title}
                subtitle={post.subtitle}
                publishDate={post.publishDate}
                header_img={post.header_img}
                content={post.content}
                created_at={post.created_at}
                updated_at={post.updated_at}
              />
            ))
        }
      </div>
    )
  }
}

export default Home