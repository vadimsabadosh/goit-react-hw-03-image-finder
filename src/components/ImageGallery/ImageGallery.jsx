import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.gallery.map(item => (
          <ImageGalleryItem
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
            key={item.id}
          />
        ))}
      </ul>
    );
  }
}
ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
