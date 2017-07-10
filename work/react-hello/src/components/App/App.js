import React, {Component} from 'react'
import CommentAdd from '../CommentAdd'
import CommentList from '../CommentList/CommentList'

/**
 * 应用组件模块
 *
 * 整体: 向外暴露一个组件类
 */
export default class App extends Component {

  constructor(props) {
    super(props)

    // 初始化状态state
    this.state = {
      comments: [
        {
          username: 'atguigu',
          content: 'React NB'
        },
        {
          username: 'xfzhang',
          content: 'React太难了'
        }

      ]
    }

    // 给自定义函数绑定this为组件对象
    this.addComment = this.addComment.bind(this)
  }

  addComment (comment) {
    // 取出状态数据
    const {comments} = this.state
    // 修改状态数据 (添加)
    comments.unshift(comment)
    // 更新状态
    this.setState({comments})
  }

  removeComment = (index) => {
    // 取出状态数据
    const {comments} = this.state
    // 修改状态数据 (删除)
    comments.splice(index, 1)
    // 更新状态
    this.setState({comments})
  }

  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList comments={this.state.comments} removeComment={this.removeComment}/>
        </div>
      </div>
    )
  }
}
