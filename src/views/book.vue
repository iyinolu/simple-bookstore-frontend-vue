<template>
  <div class="book-list">
    <BookCard :singleBook="true" :book="store.book" />
  </div>
  <div class="go-back">
    <button @click="onGoBack">Go Back</button>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import router from "@/router";
import { store } from "../store.js";
export default {
  name: "BookView",
  components: {
    BookCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    onGoBack() {
      router.push({ path: "/" });
    },
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
