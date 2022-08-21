<template>
  <div class="app-actions">
    <button @click="onShowBooks()">View Books</button>
    <button>View Authors</button>
  </div>
  <div class="book-list">
    <BookCard
      :key="book.id"
      :book="book"
      v-for="book in bookList"
      :singleBook="false"
    />
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
export default {
  name: "HomeView",
  components: {
    BookCard,
  },
  data() {
    return {
      bookList: [],
    };
  },
  methods: {
    async getBooks() {
      try {
        let response = await fetch(
          "https://simple-bookstore-test.herokuapp.com/api/book"
        );
        this.bookList = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBooks();
  },
};
</script>
