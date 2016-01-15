import React, { Component, PropTypes } from 'react'

import Header from '../components/Header'
import Main from '../components/Main'
import UserPanel from '../components/UserPanel'
import TopicHot from '../components/TopicsHot'
import CommunityStatus from '../components/CommunityStatus'
import Footer from '../components/Footer'
import '../sass/main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-body clearfix">
          <Main />
          <aside className="right-bar">
            <UserPanel isLogin="0"/>
            <TopicHot />
            <CommunityStatus />
          </aside>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App

