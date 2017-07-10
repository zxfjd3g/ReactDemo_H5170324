import React, {Component, PropTypes} from 'react'
/**
 * 评论列表项组件模块
 *
 * 整体: 向外暴露一个组件类
 */
export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object,
    removeComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  remove = () => {
    const {comment, removeComment, index} = this.props
    if(window.confirm(`确定删除${comment.username}的评论吗?`)) {
      removeComment(index)
    }
  }

  render () {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.remove}>删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}
