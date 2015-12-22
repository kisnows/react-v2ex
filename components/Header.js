import React, { PropTypes, Component } from 'react'
import SearchInput from './SearchInput'
import UserLink from './UserLink'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="content">
          <img className="logo" src="//cdn.v2ex.co/site/logo@2x.png?m=1346064962" alt="V2EX"/>
          <SearchInput placeholder="搜索问题、话题或人"/>
          <UserLink isLogin="0"/>
        </div>
      </header>
    )
  }
}

export default Header
