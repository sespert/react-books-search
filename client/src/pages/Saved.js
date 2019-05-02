import React, { Component } from 'react';
import Card from "../components/Card";
import API from "../utils/API";
// import { Container, Row, Col } from "../components/Grid";


class Saved extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    this.loadBooks();
  };


  loadBooks = () => {
    API.getDBBooks().then(res =>
      this.setState({
        books: res.data
      })).catch(err => console.log(err));
    // console.log(res.data))
  };

  handleDeleteButton = e => {
    // console.log(e.target.id);
    API.deleteBook(e.target.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>

        {!this.state.books.length ? (
          <h1>No books to display</h1>
        ) : (
            this.state.books.map(book => {
              return (

                <Card
                  key={book.title}
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
      </div>
    )
  }
}

export default Saved;