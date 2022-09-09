import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handlePressEscape = this.handlePressEscape.bind(this);
  }

  handleRef = r => {
    this.ref.current = r;
  };

  handleClickOutside(e) {
    if (!this.ref.current || !this.ref.current.contains(e.target)) {
      this.props.closeModal();
    }
  }

  handlePressEscape(e) {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keyup', this.handlePressEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keyup', this.handlePressEscape);
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal" ref={this.handleRef}>
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  url: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
