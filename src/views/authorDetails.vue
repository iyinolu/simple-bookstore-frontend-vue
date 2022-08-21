<template>
  <div class="book-list">
    <AuthorCard :singleAuthor="true" :author="store.author" />
  </div>
  <div class="go-back">
    <button @click="onGoBack">Go Back</button>
  </div>
</template>

<script>
import AuthorCard from "@/components/AuthorCard.vue";
import router from "@/router";
import { store } from "../store.js";
export default {
  name: "AuthorDetails",
  components: {
    AuthorCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    onGoBack() {
      router.push({ path: "/authors" });
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
