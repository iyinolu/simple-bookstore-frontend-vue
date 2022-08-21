import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home";
import BookView from "../views/book";
import BookForm from "../views/bookForm";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/books/:id",
    name: "Book",
    component: BookView,
    props: true,
  },
  {
    path: "/book-form",
    name: "BookForm",
    component: BookForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
