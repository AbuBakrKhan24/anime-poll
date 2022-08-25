import { createStore } from "vuex";
import router from "@/router";
export default createStore({
  state: {
    // user: null || window.localStorage.getItem("user"),
    user: null,
    users: null,
    Token: null,
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
    setToken: (state, Token) => {
      state.Token = Token;
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
    // login: async (context, payload) => {
    //   const { email, password } = payload;
    //   const response = await fetch(
    //     // `http://localhost:3000/users?email=${email}&password=${password}`
    //     `http://localhost:6969/users/?email=${email}&password=${password}`
    //   );
    //   const userData = await response.json();
    //   // console.log(userData);
    //   if (userData.length) {
    //     context.commit("setUser", userData[0]);
    //     window.localStorage.setItem("user", JSON.stringify(userData[0]));
    //   }
    //   if (!userData.length) return alert("No user found");
    // },
    login: async (context, payload) => {
      let res = await fetch("http://localhost:6969/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("setToken", data.token);
        // Verify token
        //
        fetch("http://localhost:6969/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setUser", data);
            // router.push("/users");
            // console.log(data);
          });
      } else {
        alert(data);
      }
    },
    // REGISTER USER
    register: async (context, user) => {
      fetch("http://localhost:6969/users/register", {
        method: "POST",
        body: JSON.stringify(user),

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
      const { username, email, password, avatar, about } = user;
      fetch("http://localhost:6969/users/update-user/" + id, {
        method: "PUT",
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
          avatar: avatar,
          about: about,
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
