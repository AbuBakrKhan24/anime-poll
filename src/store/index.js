import { createStore } from "vuex";

export default createStore({
  state: {
    // user: null || window.localStorage.getItem("user"),
    user: null,
    users: null,
    product: null,
    products: null,
    asc: true,
  },

  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setBook: (state, book) => {
      state.book = book;
    },
    setBooks: (state, books) => {
      state.books = books;
    },
    sortBooksByTitle: (state) => {
      state.books = state.products.sort((a, b) => {
        // return a.number - b.number;
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    sortUsersByUsername: (state) => {
      state.users = state.users.sort((a, b) => {
        // return a.number - b.number;
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.users.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    // USER
    getUser: async (context, id) => {
      fetch("http://localhost:6969/users" + id)
        .then((res) => res.json())
        .then((json) => context.commit("setUser", json))
        .catch((err) => console.log(err.message));
    },
    // USERS
    getUsers: async (context) => {
      fetch("http://localhost:6969/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },

    // LOGIN USER
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        // `http://localhost:3000/users?email=${email}&password=${password}`
        `http://localhost:6969/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      console.log(userData);
      if (userData.length) {
        context.commit("setUser", userData[0]);
        // window.localStorage.setItem("user", JSON.stringify(userData[0]));
      }
      if (!userData.length) return alert("No user found");
    },
    // REGISTER USER
    register: async (context, user) => {
      fetch("http://localhost:6969/users", {
        method: "POST",
        body: JSON.stringify(user),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // Products
    // SHOW ALL OF Products
    getBooks: async (context) => {
      fetch("http://localhost:6969/products")
        .then((res) => res.json())
        .then((data) => context.commit("setProducts", data))
        .catch((err) => console.log(err.message));
    },

    // SHOW ONE BOOK
    getBook: async (context, id) => {
      fetch("http://localhost:6969/products/" + id)
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },

    // ADD A BOOK
    addBook: async (context, book) => {
      fetch("http://localhost:6969/products", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },

    // DELETE A Product
    deleteBook: async (context, id) => {
      fetch("http://localhost:6969/products/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => context.dispatch("getProducts"));
    },

    // UPDATE A Product
    updateBook: async (context, book) => {
      const {
        id,
        genre,
        file,
        cover,
        title,
        pages,
        tags,
        audience,
        description,
        createdBy,
        year,
      } = book;
      fetch("http://localhost:6969/products/" + id, {
        method: "PUT",
        body: JSON.stringify({
          genre: genre,
          file: file,
          cover: cover,
          title: title,
          pages: pages,
          tags: tags,
          audience: audience,
          description: description,
          year: year,
          createdBy,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },

    // PROFILE
    // PROFILE
    // ADD READING LIST
    addReadingList: async (context, product) => {
      context.state.user.readingList.push(product);
      context.dispatch("updateUserInfo", context.state.user);
    },
    // DELETE READING LIST ITEM
    removeReadingList: async (context, product) => {
      context.state.user.readingList = context.state.user.readingList.filter(
        (item) => item.id != product.id
      );
      context.dispatch("updateUserInfo", context.state.user);
    },
    // DELETE A USER
    deleteUser: async (context, id) => {
      fetch("http://localhost:6969/users/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // UPDATE A USER
    updateUserInfo: async (context, user) => {
      const {
        id,
        email,
        password,
        username,
        avatar,
        readingList,
        location,
        about,
        role,
      } = user;
      fetch("http://localhost:6969/users/" + id, {
        method: "PUT",
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
          avatar: avatar,
          readingList: readingList,
          location: location,
          about: about,
          role: role,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
  },
  modules: {},
});