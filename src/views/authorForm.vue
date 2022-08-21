<template>
  <form class="form">
    <div class="go-back">
      <button @click="onGoBack">Go Back</button>
    </div>
    <fieldset>
      <label>Firstname</label>
      <input v-model="firstname" placeholder="Enter Firstname" />
      <span v-if="errorMsg.firstname">{{ errorMsg.firstname }}</span>
    </fieldset>
    <fieldset>
      <label>Lastname</label>
      <input v-model="lastname" placeholder="Enter Lastname" />
      <span v-if="errorMsg.lastname">{{ errorMsg.lastname }}</span>
    </fieldset>

    <button @click="addAuthor" type="button">Add Author</button>
  </form>
</template>

<script>
import { store } from "../store.js";
import router from "@/router";
import services from "../services";
export default {
  name: "AuthorForm",
  data() {
    return {
      store,
      firstname: "",
      lastname: "",
      errorMsg: {
        firstname: null,
        lastname: null,
      },
    };
  },
  methods: {
    validate() {
      let isValid = true;

      if (!this.firstname) {
        isValid = false;
        this.errorMsg["firstname"] = "This field cannot be empty";
      } else {
        this.errorMsg["firstname"] = null;
      }
      if (!this.lastname) {
        isValid = false;
        this.errorMsg["lastname"] = "This field cannot be empty";
      } else {
        this.errorMsg["lastname"] = null;
      }

      return isValid;
    },

    async addAuthor() {
      let data = {
        first_name: this.firstname,
        last_name: this.lastname,
      };
      if (this.validate()) {
        services
          .postAuthor(data)
          .then((res) => res.json())
          .then((response) => {
            store.updateAuthors(response);
            this.resetForm();
          });
      }
    },
    onGoBack() {
      router.push({ name: "Authors" });
    },
    resetForm() {
      this.firstname = "";
      this.lastname = "";
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
.go-back {
  display: flex;
  justify-content: center;
}
.go-back button {
  margin: 10px;
  height: 34px;
}
</style>
