<template>
  <form class="form">
    <div class="go-back">
      <button @click="onGoBack">Go Back</button>
    </div>
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
        <option
          :key="author.id"
          v-for="author in store.authors"
          :value="author.id"
        >
          {{ `${author.first_name} ${author.last_name}` }}
        </option>
      </select>
      <span v-if="errorMsg.author">{{ errorMsg.author }}</span>
    </fieldset>
    <button @click="addBook" type="button">Add</button>
  </form>
</template>

<script>
import { store } from "../store.js";
import router from "@/router";
import services from "../services";
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
      if (this.validate()) {
        let data = {
          name: this.name,
          isbn: this.isbn,
          author_id: parseInt(this.author),
        };
        services
          .postBook(data)
          .then((res) => res.json())
          .then((response) => {
            store.updateBooks(response);
            this.resetForm();
          })
          .catch((err) => console.log(err));
      }
    },
    onGoBack() {
      router.push({ name: "Home" });
    },
    resetForm() {
      this.name = "";
      this.isbn = "";
      this.author = "";
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
select {
  font-size: 16px;
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
.go-back {
  display: flex;
  justify-content: center;
}
.go-back button {
  margin: 10px;
  height: 34px;
}
</style>
