/**
 * CommunityStatus.js
 * @author kisnows
 * Created 2015-12-24
 */
import React, { Component } from 'react'

export default class CommunityStatus extends Component {
  render() {
    return (
      <div className="community-status box">
        <div className="cell">
          <span className="fade">社区运行状况</span>
        </div>
        <div className="cell">
          <div><span className="cell-title">注册会员</span><span className="cell-content">152308</span></div>
          <div><span className="cell-title">主题</span><span className="cell-content">152308</span></div>
          <div><span className="cell-title">回复</span><span className="cell-content">152308</span></div>
        </div>
        <div className="inner">
          <div><span className="chevron">›</span><a href="http://v2ex.com/top/rich">财富排行榜</a></div>
          <div><span className="chevron">›</span><a href="http://v2ex.com/top/player">消费排行榜</a></div>
        </div>
      </div>
    )
  }
}
