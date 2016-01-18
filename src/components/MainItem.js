/**
 * @author kisnows
 * @email  yq12315@gmail.com
 * Created 2016/1/18.
 */
import React,{ PropTypes, Component } from 'react'

export default class MainItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let memberUrl = 'http://v2ex.com/member/' + this.props.member.username
    let modifyTime = (Math.random() * (1 - 60) + 60).toFixed(0) + '分钟'
    return (
      <div className="cell item main-item">
        <div className="main-user-avatar">
          <a href={memberUrl}>
            <img src={this.props.member.avatar_normal} alt={this.props.member.username}/>
          </a>
        </div>
        <div className="main-content">
          <div className="item-title"><a href={this.props.url}>{this.props.title}</a></div>
          <span className="small fade">
            <a className="node" href={this.props.node.url}>{this.props.node.title}</a> &nbsp;•&nbsp;
            <strong><a href={memberUrl}>{this.props.member.username}</a></strong> &nbsp;•&nbsp; {modifyTime}前
          </span>
        </div>
        <div className="main-comment">
          <a href={this.props.url} className="count_livid">{this.props.replies}</a>
        </div>
      </div>
    )
  }
}

MainItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  member: PropTypes.object,
  replies: PropTypes.number
}
