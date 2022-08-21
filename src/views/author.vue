<template>
  <div class="app-actions">
    <button @click="toAuthorForm">Add Author</button>
    <button @click="toBooks">View Books</button>
  </div>
  <div class="book-list">
    <AuthorCard
      :key="author.id"
      :author="author"
      v-for="author in store.authors"
      :singleAuthor="false"
    />
  </div>
</template>

<script>
import AuthorCard from "@/components/AuthorCard.vue";
import router from "@/router";
import { store } from "../store.js";
import services from "../services";
export default {
  name: "AuthorView",
  components: {
    AuthorCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    toBooks() {
      router.push({ path: "/" });
    },
    toAuthorForm() {
      router.push({ name: "AuthorForm" });
    },
    async getAuthors() {
      services
        .getAuthors()
        .then((res) => res.json())
        .then((response) => store.addAuthors(response.reverse()));
    },
  },
  created() {
    this.getAuthors();
  },
};
</script>

<style scoped>
.go-back {
  display: flex;
  justify-content: center;
}
.go-back button {
  margin: 10px;
  height: 34px;
}
</style>
