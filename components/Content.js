/**
 * Content.js
 * @author kisnows
 * Created 2015-12-21
 */
import React, { PropTypes, Component } from 'react'
import Main from './Main'
import UserPanel from './UserPanel'
import TopicHot from './TopicsHot'

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Main />
        <div className="left-bar">
          <UserPanel isLogin="0" />
          <TopicHot />
        </div>
      </div>
    )
  }
}
