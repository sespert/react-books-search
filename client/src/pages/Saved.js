import React, { Component } from 'react';
import MediaSave from "../components/MediaSave";
import API from "../utils/API";
import { Container, Row } from "../components/Grid";


class Saved extends Component {

  state = {
    books: [],
  }
  //When the page is loaded, all the books in the DB are displayed
  componentDidMount() {
    this.loadBooks();
  };

  //Helper function to grab books from MongoDB
  loadBooks = () => {
    API.getDBBooks().then(res =>
      this.setState({
        books: res.data
      })).catch(err => console.log(err));
  };

  //When user clickes on the button, the book is removed from the DB
  handleDeleteButton = e => {
    // console.log(e.target.id);
    API.deleteBook(e.target.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
         <Row>
        {!this.state.books.length ? (
          <h1>No books to display</h1>
        ) : (
            this.state.books.map(book => {
              return (

                <MediaSave
                  key={book._id}
                  title={book.title}
                  authors={book.authors}
                  image={book.image}
                  description={book.description}
                  href={book.href}
                  handleDeleteButton={this.handleDeleteButton}
                  id = {book._id}
                />

              )
            })

          )}  
          </Row> 
          </Container>
      </div>
    )
  }
}

export default Saved;