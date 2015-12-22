import React, { Component, PropTypes } from 'react'


class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      window.open('https://www.google.com/search?q=site:v2ex.com/t%20' + text)
    }
  }

  render() {
    return (
      <inputWrap className="search-input">
        <input className="input"
               type="text"
               placeholder={this.props.placeholder}
               value={this.state.text}
               onChange={this.handleChange.bind(this)}
               onKeyDown={this.handleSubmit.bind(this)}/>
      </inputWrap>
    )
  }
}

SearchInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string
};

export default SearchInput
