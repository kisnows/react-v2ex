/**
 * Main.js.js
 * @author kisnows
 * Created 2015-12-21
 */
import React, { Component } from 'react'
import MainItem from './MainItem'
import { get } from '../utils/getData'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      hot: [],
      latest: [],
      count: 0
    }
  }

  componentDidMount() {
    const _this = this
    get('./api/hot.json').then(function (data) {
      // console.log(data)
      _this.setState( { hot: data })
    }).catch(function (err) {
      console.error( err )
    })
    get('./api/latest.json').then(function (data) {
      _this.setState({ latest: data })
    }).catch(function (err) {
      console.error(err)
    })
  }

  handleClick(e) {
    let count = this.state.count
    if (e.target.tagName.toLowerCase() === 'span') {
      if (this.className === 'tab_current') {
        return false
      }
      let tabs = document.querySelector('#Tabs').querySelectorAll('span')
      Array.prototype.slice.call(tabs).forEach(function (el) {
        el.className = 'tab'
      })
      e.target.className = 'tab_current'
      this.setState({ count: ++count })
    }
  }

  render() {
    let style = [{
      display: 'block'
    },{
      display: 'none'
    }]

    if(this.state.count % 2 === 0){
      style.reverse()
    }

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
          <div style={ style[0] }>
            {this.state.hot.map((topic, index) =>
              <MainItem {...topic} key={index}/>
            )}
          </div>
          <div style={ style[1] }>
            {this.state.latest.map((topic, index) =>
              <MainItem {...topic} key={index}/>
            )}
          </div>
      </div>
    )
  }
}
