<template>
  <div class="author-card">
    <h2 class="author-title">
      <span>👤</span>
      {{ `${author.first_name} ${author.last_name}` }}
    </h2>
    <div id="card-buttom-container">
      <button v-if="!singleAuthor" @click="store.showAuthorDetails(author)">
        <router-link :to="{ name: 'AuthorDetails', params: { id: author.id } }"
          >View</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "AuthorCard",
  components: {},
  props: {
    author: {},
    singleAuthor: Boolean,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.author-title {
  margin-bottom: 29px;
  text-align: start;
}
.author-card {
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

.author-card #card-buttom-container {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
