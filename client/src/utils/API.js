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
  
  getDBBooks: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }

};
