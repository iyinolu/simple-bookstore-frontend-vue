<template>
  <div class="app-center-container">
    <h1>📚 BOOKSTORE PORTAL 📚</h1>
    <div class="app-actions">
      <button>View Books</button>
      <button>View Authors</button>
    </div>
    <div class="book-list">
      <div class="book-card">
        <h2 class="book-title"><span>📔</span> Book Title</h2>
        <p>Book Author</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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

.book-card {
  width: 400px;
  margin: 0 auto;
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
</style>
