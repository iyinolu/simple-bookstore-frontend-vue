import { reactive } from "vue";

export const store = reactive({
  book: {},
  books: [],
  showBookDetails(bookObject) {
    console.log(bookObject);
    this.book = bookObject;
  },
});
