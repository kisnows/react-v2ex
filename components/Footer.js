/**
 * Bottom.js
 * @author kisnows
 * Created 2015-12-24
 */
import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="content">
          <div className="inner">
            <div className="fr">
              <a href="https://www.digitalocean.com/?refcode=1b51f1a7651d" target="_blank">
                <img src="http://v2ex.com/static/img/do.png" width="64" border="0" alt="DigitalOcean"/>
              </a>
            </div>
            <div className="top-link">
              <strong>
                <a href="/about" className="dark" target="_self">关于</a>
                <a href="/faq" className="dark" target="_self">FAQ</a>
                <a href="/p/7v9TEc53" className="dark" target="_self">API</a>
                <a href="/mission" className="dark" target="_self">我们的愿景</a>
                <a href="/ip" className="dark" target="_self">IP 查询</a>
                <a href="https://workspace.v2ex.com/" className="dark" target="_blank">工作空间</a>
                <a href="/advertise" className="dark" target="_self">广告投放</a>
                <a href="/advertise/2015.html" className="dark" target="_self">鸣谢</a>
                <a href="/start" className="dark" target="_blank">上网首页</a>
                952 人在线
                <span className="fade top-recode">最高记录 1630</span>
              </strong>
              <a className="select-language" href="/select/language">
                <img src="http://v2ex.com/static/img/lang_zhcn_32.png" width="20"/></a>
            </div>
            <p className="describe-top">创意工作者们的社区</p>
            <p className="describe-bottom">World is powered by solitude</p>
            <span className="small fade">VERSION: 3.9.2 · 23ms · UTC 12:10 · PVG 20:10 · LAX 04:10 · JFK 07:10<br />♥ Do have faith in what you're doing.</span>
            <span className="f12 gray"><a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">沪ICP备15015613号-1</a></span>
          </div>
        </div>
      </div>
    )
  }
}
