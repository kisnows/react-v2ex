/**
 * Main.js.js
 * @author kisnows
 * Created 2015-12-21
 */
import React, { PropTypes, Component } from 'react'
import getData from '../utils/getData'
import Hot from '../api/hot.json'
import Latest from '../api/latest.json'

class MainItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let memberUrl  = "v2ex.com/member/" + this.props.member.username;
    let modifyTime = '21分钟';
    return (
      <div className="cell item main-item">
        <div className="main-user-avatar">
          <a href={memberUrl}>
            <img src={this.props.member.avatar_normal} alt={this.props.member.username}/>
          </a>
        </div>
        <div className="main-content">
          <a className="item-title" href={this.props.url}>{this.props.title}</a>
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

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: Hot,
      count: 0
    }
  }

  handleClick(e) {
    if (e.target.tagName.toLowerCase() === 'span') {
      if (this.className === 'tab_current') {
        return false;
      }
      let tabs = document.querySelector('#Tabs').querySelectorAll('span');
      Array.prototype.slice.call(tabs).forEach(function (el) {
        el.className = 'tab';
      });
      e.target.className = 'tab_current';
    }
    if (this.state.count % 2 === 0) {
      this.setState({data: Hot})
    } else {
      this.setState({data: Latest})
    }
    this.state.count++;
  }

  render() {
    return (
      <div className="main box">
        <div className="cell tabs" id="Tabs" onClick={this.handleClick.bind(this)}>
          <span className="tab">技术</span>
          <span className="tab">创意</span>
          <span className="tab">好玩</span>
          <span className="tab">Apple</span>
          <span className="tab">酷工作</span>
          <span className="tab">交易</span>
          <span className="tab">城市</span>
          <span className="tab">问与答</span>
          <span className="tab_current">最热</span>
          <span className="tab">全部</span>
          <span className="tab">R2</span>
        </div>
        <div>
          {this.state.data.map((topic, index) =>
            <MainItem {...topic}
              key={index}
            />
          )}
        </div>
      </div>
    )
  }
}
