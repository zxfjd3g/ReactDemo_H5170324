/**
 * Created by Fei on 2017/7/10.
 */
import React, {Component, PropTypes} from 'react'
import axios from 'axios'

export default class Main extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    // 初始化状态
    this.state = {
      firstView: true, //是否显示初始页
      loading: false, // 是否正在请求中
      users: null, // 请求获取的列表数据
      errorMsg: null // 请求错误的信息
    }
  }

  // 监视接收prop的变化
  componentWillReceiveProps (newProps) {
    // 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true
    })

    const {searchName} = newProps
    const url = `https://api.github.com/search/users?q=${searchName}`
    // 发送ajax请求
    axios.get(url)
      .then(response => {
        const result = response.data
        console.log(result)

        // 得到用户数组
        const users = result.items.map(item => {
          return {
            html_url: item.html_url,
            avatar_url: item.avatar_url,
            login: item.login
          }
        })
        // 更新状态(请求成功)
        this.setState({
          loading: false,
          users
        })
      })
      .catch(error => {
        console.log(error)
        // 更新状态(请求失败)
        this.setState({
          loading: false,
          errorMsg: '请求失败啦!!!'
        })
      })
  }

  render () {
    const {firstView, loading, users, errorMsg} = this.state
    if(firstView) {
      return <h2>Enter name to search</h2>
    } else if(loading) {
      return <h2>Loading result...</h2>
    } else if(errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => {
              return (
                <div className="card" key={index}>
                  <a href={user.html_url} target="_blank">
                    <img src={user.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}