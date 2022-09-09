import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.input) {
      this.props.onSubmit(this.state.input);
    }
  }
  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.input}
            onChange={this.onInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
