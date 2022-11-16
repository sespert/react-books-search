import React, { Component } from 'react';
import API from "../utils/API";
import MediaSearch from "../components/MediaSearch";
import Form from '../components/Form';
import { Container, Row, Col } from "../components/Grid";
import SearchButton from "../components/SearchButton";
// import image from "../assets/generic-book-cover.jpg"

class Search extends Component {
    
    state = {
        books:[],
        bookSearch: ""
      }
    
      //When user types a book name, this is being triggered
      handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      };

      //When user clicks on Search button, the google api is being reached with the input
      handleFormSubmit = e => {
        e.preventDefault();
        API.getBook(this.state.bookSearch)
          .then(res => {
            console.log(res.data.items);
            this.setState({ books: res.data.items });
          })
          .catch(err => console.log(err));      
      };

      //When a save button from a book is clicked, its info is saved to a MongoDB
      handleSaveButton = e => {
        e.preventDefault();
        const index = e.target.id;
        const nextI = parseInt(e.target.id) + 1;
        const newBook = this.state.books.slice(index, nextI);
        let titleS = "";
        let imageS = "";
        let authorsS = [];
        let descriptionS = "";
        let hrefS = "";

        newBook.map(ele => {
          return (
            titleS = ele.volumeInfo.title,
            imageS = ele.volumeInfo.imageLinks.thumbnail,
            authorsS = ele.volumeInfo.authors,
            descriptionS = ele.volumeInfo.description,
            hrefS = ele.volumeInfo.previewLink
          )
         })

        API.saveBook({
          title: titleS,
          image: imageS,
          authors: authorsS,
          description: descriptionS,
          href: hrefS
        }).then(res => alert("book saved"))
        .catch(err => console.log(err));
      
      };

      render() {
        return (
          <div>  
            <Container>
              <Row>
              <Col size="md-12">
              <form>
                <Row>
                  <Col size="md-9">               
                    <Form name="bookSearch"
                    value={this.state.bookSearch}
                    onChange={this.handleInputChange}
                    />
                  </Col>
                  <Col size="md-3">
                  <SearchButton
                    onClick={this.handleFormSubmit}
                    type="success"
                    className="input-lg"
                  >
                    Search
                  </SearchButton>
                  </Col>
                </Row>
              </form>
              </Col>
              </Row>

              <Row>
              {!this.state.books.length ? (
                <h1 style={{ marginTop: '100px', marginLeft: '400px'}}>No books available to display</h1>
              ) : (
                this.state.books.map((book,index) => {
                  return(
                    
                    <MediaSearch 
                      key = {book.id}
                      title = {book.volumeInfo.title}
                      authors = {book.volumeInfo.authors}
                      image = {book.volumeInfo.imageLinks.smallThumbnail}
                      description = {book.volumeInfo.description}
                      href = {book.volumeInfo.previewLink} 
                      handleSaveButton = {this.handleSaveButton}
                      id = {index}
                    />
                  
                  )
                })
                    
              )  }   
              </Row>

            </Container>        
          </div>
        )
      }
}

export default Search;