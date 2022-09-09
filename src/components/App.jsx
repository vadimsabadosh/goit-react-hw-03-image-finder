import React, { Component } from 'react';
import Button from './Button';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './Searchbar';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      loading: false,
      page: 1,
      search: '',
    };
    this.onSearchInput = this.onSearchInput.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  onSearchInput(search) {
    this.setState({ search, page: 1, gallery: [] });
  }

  loadMore() {
    this.setState(state => ({ page: state.page + 1 }));
  }

  async fetchData() {
    return fetch(
      `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=29811952-77bff0dc85e47b91b88370210&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => res.json());
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.search !== this.state.search
    ) {
      this.setState({ loading: true });
      this.fetchData().then(json => {
        this.setState(state => ({
          gallery: [...state.gallery, ...json.hits],
          loading: false,
        }));
      });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchInput} />
        <div className="wrapper">
          {!!this.state.gallery.length && (
            <ImageGallery gallery={this.state.gallery} />
          )}
          {this.state.loading && <Loader />}
          {!!this.state.gallery.length && !this.state.loading && (
            <Button onClick={this.loadMore} />
          )}
        </div>
      </>
    );
  }
}
