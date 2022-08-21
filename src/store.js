import { reactive } from "vue";

export const store = reactive({
  book: {},
  books: [],
  authors: [],
  author: {},

  // Book
  showBookDetails(bookObject) {
    this.book = bookObject;
  },
  addBooks(books) {
    this.books = books;
  },
  updateBooks(book) {
    this.books = [...this.books, book];
  },

  // Author
  showAuthorDetails(author) {
    this.author = author;
  },
  addAuthors(authors) {
    this.authors = authors;
  },
  updateAuthors(author) {
    this.authors = [...this.authors, author];
  },
});
