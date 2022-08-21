const getAuthors = async () => {
  return await fetch("https://simple-bookstore-test.herokuapp.com/api/author");
};

const postAuthor = async (data) => {
  return await fetch("https://simple-bookstore-test.herokuapp.com/api/author", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getBook = async () => {
  return await fetch("https://simple-bookstore-test.herokuapp.com/api/book");
};

const postBook = async (data) => {
  return await fetch("https://simple-bookstore-test.herokuapp.com/api/book", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default { getAuthors, postAuthor, postBook, getBook };
