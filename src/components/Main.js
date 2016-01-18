/**
 * Main.js.js
 * @author kisnows
 * Created 2015-12-21
 */
import React, { Component } from 'react'
import MainItem from './MainItem'
import Hot from '../api/hot.json'
import Latest from '../api/latest.json'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: Latest,
      count: 0
    }
  }

  handleClick(e) {
    if (e.target.tagName.toLowerCase() === 'span') {
      if (this.className === 'tab_current') {
        return false
      }
      let tabs = document.querySelector('#Tabs').querySelectorAll('span')
      Array.prototype.slice.call(tabs).forEach(function (el) {
        el.className = 'tab'
      })
      e.target.className = 'tab_current'
    }
    if (this.state.count % 2 === 0) {
      this.setState({ data: Latest })
    } else {
      this.setState({ data: Hot })
    }
    this.state.count++
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
            <MainItem {...topic} key={index}/>
          )}
        </div>
      </div>
    )
  }
}

