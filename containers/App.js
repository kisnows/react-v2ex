import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import '../sass/main.scss'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App

