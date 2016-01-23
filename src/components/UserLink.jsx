import React, { PropTypes, Component } from 'react'

class UserLink extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (+this.props.isLogin) {
      return (
        <div>
          你不可能登录
        </div>
      )
    } else {
      return (
        <div className="user-link">
          <a href="https://www.v2ex.com">首页</a>
          <a href="https://www.v2ex.com/signup">注册</a>
          <a href="https://www.v2ex.com/signin">登录</a>
        </div>
      )
    }
  }
}

UserLink.propTypes = {
  isLogin: PropTypes.string
}

export default UserLink
