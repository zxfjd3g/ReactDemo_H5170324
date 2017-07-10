/**
 * Created by Fei on 2017/7/10.
 */
import React, {Component, PropTypes} from 'react'
export default class Search extends Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }


  search = () => {
    const searchName = this.refs.searchName.value.trim()
    if(searchName) {
      this.props.setSearchName(searchName)
    }
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="enter the name you search" ref="searchName"/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}