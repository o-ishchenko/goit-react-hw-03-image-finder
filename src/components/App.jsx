import { Component } from 'react';
import Searchbar from './Searchbar';
import Loader from './Loader';

 class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Loader />

      </div>
    );
  }
 }

 export default App