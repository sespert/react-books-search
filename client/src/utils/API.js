import axios from "axios";

// Export an object containing methods we'll use for accessing the Google Books API

export default {
  //Get books from google api by searching its title
  getBook: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

   // Saves a book to the database
   saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  
  //Get books from the Mongo database
  getDBBooks: function() {
    return axios.get("/api/books");
  },

  //Deletes a book from the MongoDB
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }

};
