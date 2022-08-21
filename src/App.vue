<template>
  <div class="app-center-container">
    <h1>📚 BOOKSTORE PORTAL 📚</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      bookData: [],
      book: {},
    };
  },
  methods: {
    setBookDetails(data) {
      this.book = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
  overflow: scroll;
}

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #eeeeee;
  overflow: hidden;
}

.app-center-container {
  background-color: #d8d8d8;
  max-width: 700px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 13px;
  padding-bottom: 98px;
}

.app-center-container h1 {
  margin: 30px 0;
  font-size: 26px;
  font-weight: 200;
}

.app-actions {
  display: flex;
  justify-content: center;
}

.app-actions button {
  margin: 10px;
  height: 34px;
}
</style>
