import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';

export default class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({
      isOpen: true,
    });
  }
  onCloseModal() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <>
        <li className="gallery-item">
          <img
            src={this.props.webformatURL}
            alt=""
            onClick={this.onOpenModal}
          />
        </li>
        {this.state.isOpen && (
          <Modal
            url={this.props.largeImageURL}
            closeModal={this.onCloseModal}
          />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
