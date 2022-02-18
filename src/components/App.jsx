import { Component } from 'react';
import Searchbar from './Searchbar';

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

      </div>
    );
  }
 }

 export default App