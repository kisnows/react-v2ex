import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Content from '../components/Content'
import '../sass/main.scss'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App

