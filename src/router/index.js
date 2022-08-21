import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home";
import BookView from "../views/book";
import BookForm from "../views/bookForm";
import AuthorView from "../views/author";
import AuthorDetails from "../views/authorDetails";
import AuthorForm from "../views/authorForm";

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
  {
    path: "/authors",
    name: "Authors",
    component: AuthorView,
  },
  {
    path: "/author/:id",
    name: "AuthorDetails",
    component: AuthorDetails,
  },
  {
    path: "/authors-form",
    name: "AuthorForm",
    component: AuthorForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
