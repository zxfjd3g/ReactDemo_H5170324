import React, {Component, PropTypes} from 'react'
/**
 * 添加评论组件模块
 *
 * 整体: 向外暴露一个组件类
 */
export default class CommentAdd extends Component {

  constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      username: ''
    }
  }

  static propTypes = {
    addComment: PropTypes.func
  }

  add = () => {
    // 收集用户输入的username/content
    const username = this.state.username.trim()
    const content = this.refs.content.value.trim()
    // 检查是否正常输入, 如果没有, 提示
    if(!username || !content) {
      alert('请正常输入')
      return
    }
    //封装成comment对象
    const comment = {username, content}
    // 调用addComment添加comment
    this.props.addComment(comment)
    // 清理输入数据
    this.state.username = ''
    this.refs.content.value = ''
  }

  setUsername = (event) => {
    var username = event.target.value
    this.setState({username})
  }

  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名"
              value={this.state.username} onChange={this.setUsername}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
