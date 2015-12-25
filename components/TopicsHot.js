/**
 * TopicsHot.js
 * @author kisnows
 * Created 2015-12-21
 */
import React, {PropTypes, Component } from 'react';
import Hot from '../api/hot.json';

class TopicsHot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="topic-hot box">
        <div className="cell">
          <span className="fade">今日热议主题</span>
        </div>
        <div>
          {Hot.map((topic, index) =>
            <TopicsHotItem {...topic}
              key={index}
            />
          )}
        </div>
      </div>
    )
  }
}

class TopicsHotItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let memberUrl = "http://v2ex.com/member/" + this.props.member.username;
    return (
      <div className="item cell">
        <a href={memberUrl}>
          <img src={this.props.member.avatar_mini} alt={this.props.member.username}/>
        </a>
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    )
  }
}
export default TopicsHot
