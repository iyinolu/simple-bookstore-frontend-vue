<template>
  <div class="book-card">
    <h2 class="book-title"><span>📔</span> {{ book.name }}</h2>
    <div id="card-buttom-container">
      <p>{{ `${book?.author.first_name} ${book?.author.last_name}` }}</p>
      <button v-if="!singleBook" @click="store.showBookDetails(book)">
        <router-link :to="{ name: 'Book', params: { id: book.id } }"
          >View</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "BookCard",
  components: {},
  props: {
    book: {},
    singleBook: Boolean,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.book-title {
  margin-bottom: 29px;
  text-align: start;
}
.book-card {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  min-height: 86px;
  align-items: flex-start;
  background: #efefef;
  border: 1px solid #d0d0d0;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
}

.book-card #card-buttom-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
