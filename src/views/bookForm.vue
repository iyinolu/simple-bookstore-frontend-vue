<template>
  <form class="form">
    <fieldset>
      <label>Book Title</label>
      <input v-model="name" placeholder="Enter Book Title" />
      <span v-if="errorMsg.name">{{ errorMsg.name }}</span>
    </fieldset>
    <fieldset>
      <label>ISBN Number</label>
      <input v-model="isbn" placeholder="Enter ISBN Number" />
      <span v-if="errorMsg.isbn">{{ errorMsg.isbn }}</span>
    </fieldset>
    <fieldset>
      <label>Author</label>
      <select v-model="author">
        <option disabled value="">Please select an author</option>
        <option value="1">Ben Carson</option>
        <option value="2">Michelle Obama</option>
        <option value="3">Steve Havey</option>
      </select>
      <span v-if="errorMsg.author">{{ errorMsg.author }}</span>
    </fieldset>
    <button @click="addBook" type="button">Show</button>
  </form>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "BookForm",
  data() {
    return {
      store,
      name: "",
      isbn: "",
      author: "",
      errorMsg: {
        name: null,
        isbn: null,
        author: null,
      },
    };
  },
  methods: {
    testForm() {
      console.log({
        store: this.name,
        isbn: this.isbn,
        author: this.author ? parseInt(this.author) : -1,
      });
    },
    validate() {
      let isValid = true;

      if (!this.name) {
        isValid = false;
        this.errorMsg["name"] = "This field cannot be empty";
      } else {
        this.errorMsg["name"] = null;
      }
      if (!this.isbn) {
        isValid = false;
        this.errorMsg["isbn"] = "This field cannot be empty";
      } else {
        this.errorMsg["isbn"] = null;
      }
      if (!this.author || this.author === -1) {
        isValid = false;
        this.errorMsg["author"] = "Please select an option";
      } else {
        this.errorMsg["author"] = null;
      }
      return isValid;
    },

    async addBook() {
      console.log(this.validate());
      if (this.validate()) {
        try {
          let response = await fetch("http://127.0.0.1:8000/api/book", {
            method: "POST",
            body: JSON.stringify({
              name: this.name,
              isbn: this.isbn,
              author_id: parseInt(this.author),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          this.bookList = await response.json();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 346px;
  margin: 0 auto;
}
input,
button,
select {
  height: 37px;
}
button {
  margin: 25px 0;
}
fieldset {
  padding: 0;
  margin: 10px 0;
  border: navajowhite;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
}
label {
  margin-bottom: 10px;
}
fieldset span {
  font-size: 12px;
  color: tomato;
}
</style>
