<template>
  <div class="app-actions">
    <button @click="onAddBook()">Add Book</button>
    <button @click="onShowAuthors()">View Authors</button>
  </div>
  <div class="book-list">
    <BookCard
      :key="book.id"
      :book="book"
      v-for="book in store.books.reverse()"
      :singleBook="false"
    />
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import router from "@/router";
import { store } from "../store.js";
import services from "../services";
export default {
  name: "HomeView",
  components: {
    BookCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    async getBooks() {
      services
        .getBook()
        .then((res) => res.json())
        .then((response) => store.addBooks(response))
        .catch((err) => console.log(err));
    },
    onAddBook() {
      router.push({ path: "/book-form" });
    },
    onShowAuthors() {
      router.push({ name: "Authors" });
    },
  },
  created() {
    this.getBooks();
    services
      .getAuthors()
      .then((res) => res.json())
      .then((response) => store.addAuthors(response));
  },
};
</script>
