import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Form from './form';
import Content from './content';
import Output from './Output';

class App extends Component {
  state = {
    books: [],
    
    

    format: ''
  };

 
  getBooks = async e => {
    
    let formSearch = e.target.elements.formSearch.value;
    e.preventDefault();
    e.target.reset();

    
    this.setState({ books: [] });
    

    // make API request
    const nytApiCall = await fetch(
      'https://api.nytimes.com/svc/books/v3/lists.json?list=Hardcover Fiction&api-key=T5nZhE95OuAR1scJuCH75LKTDexsUy6T' 
        
    );

    


    const data = await nytApiCall.json();
  

    

    // setState with data
    this.setState({ books: data.results });
    

    

    console.log('app.js state', this.state);

    
     

    this.setState({ format: formSearch });
  };


 



  render() {
    return (
      <div className="container">
        <NavBar />
        <Content/>
        <Form getBooks={this.getBooks} />
        <Output books={this.state.books} 
                
        />

       
      </div>
    );
  }
}

export default App;
