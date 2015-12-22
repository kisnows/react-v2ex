import React, {PropTypes, Component } from 'react';

class UserPanel extends Component {

  render() {
    if (+this.props.isLogin) {
      return (
        <div>
          你不可能登录
        </div>
      )
    } else {
      return (
        <div className="user-panel box">
          <div className="cell">
            <strong>V2EX = way to explore</strong>
            <span className="fade">V2EX 是一个关于分享和探索的地方</span>
          </div>
          <div className="inner">
            <a href="v2ex.com/signup" className="button">现在注册</a>
            <div>已注册的用户请 <a href="v2ex.com/signin">登录</a></div>
          </div>
        </div>
      )
    }
  }
}

export default UserPanel