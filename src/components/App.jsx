import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import Loader from './Loader';
import ImageGallery from './ImageGallery';
import Button from './Button';
import s from './App.module.css'

const API_KEY = '24768000-69e119d8d67a6997f84a85579';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    searchQuery: '',
    data: [],
    loading: false,
    page: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevPage !== nextPage || prevQuery !== nextQuery ) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?q=${this.state.searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (!response.ok) {
            throw Error ('Oops, there is no image with your search query')
          }
          return response.json();
         
        })
        .then(response => {
          if (response.hits.length === 0) { 
            toast.error('Sorry, there are no images matching your search query. Please try again.');
            this.setState({ loading: false });
            return;
          }
          this.setState(prevState => ({
            data: [...prevState.data, ...response.hits],
            loading: false,
          }));
        })
        .catch(error => toast.error(`${error}`));
    }
  }

  handleFormSubmit = data => {
    this.setState({ searchQuery: data.searchQuery, data: [], page: data.page });
  };
  handleButtonClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.data.length !== 0 && <ImageGallery data={this.state.data} />}
        <div className={s.box}>
        {this.state.loading && <Loader />}
          {this.state.data.length !== 0 && <Button onClick={this.handleButtonClick} />}
        </div>
        <ToastContainer autoClose={1500} position="top-center" />
      </div>
    );
  }
}

export default App;
