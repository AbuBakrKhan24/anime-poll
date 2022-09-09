import { createStore } from "vuex";
import router from "@/router";
import createPersistedState from "vuex-persistedstate";
import swal from "sweetalert";

export default createStore({
  state: {
    user: null,
    users: null,
    Token: null,
    category: null,
    categories: null,
    elections: null,
    categorysection: null,
    polls: null,
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
    setCategory: (state, category) => {
      state.category = category;
    },
    setCategories: (state, categories) => {
      state.categories = categories;
    },
    setPolls: (state, polls) => {
      state.polls = polls;
    },
    setElections: (state, elections) => {
      state.elections = elections;
    },
    setCategorySection: (state, categorysection) => {
      state.categorysection = categorysection;
    },
    Logout(state) {
      (state.user = ""), (state.Token = "");
    },
    adminMode(state) {
      state.user.user_type = "admin";
    },
    userMode(state) {
      state.user.user_type = "user2";
    },
    setUserUpdate(state, user) {
      console.log(user);
      state.user.username = user.username;
      state.user.email = user.email;
      state.user.password = user.password;
      state.user.avatar = user.avatar;
      state.user.about = user.about;
    },
    setVote(state, value, id) {
      state.elections = state.elections.find((election) => {
        if ((election.elections_id = id)) {
          election.vote_count = value;
        }
      });
    },
  },
  actions: {
    // USER
    getUser: async (context, id) => {
      fetch("https://anime-poll-api.herokuapp.com/users" + id)
        .then((res) => res.json())
        .then((json) => context.commit("setUser", json))
        .catch((err) => console.log(err.message));
    },
    // USERS
    getUsers: async (context) => {
      fetch("https://anime-poll-api.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },
    // REGISTER USER
    register: async (context, user) => {
      fetch("https://anime-poll-api.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
      router.push("/login");
      console.log(`User ${(user.username, user.email)} created successfully`);
      swal(
        "Good Job!",
        "Your Sign Up Was A Success, Now lets get you familiar with logging you into our website.",
        "success"
      );
    },
    // Login
    login: async (context, payload) => {
      let res = await fetch(
        "https://anime-poll-api.herokuapp.com/users/login",
        // "http://localhost:6969/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        }
      );
      let data = await res.json();
      console.log(data);

      context.commit("setToken", data.token);
      if (data.msg === "Password incorrect") {
        swal(
          "Oh no!",
          "The password you entered is either incorrect or does not exixst. ",
          "error"
        );
      } else if (data.msg === "email not found please register") {
        swal(
          "Oh No!",
          "The Email you entered is either incorrect or does not exist.",
          "error"
        );
      } else {
        swal(
          "Welcome Back!",
          "Hope you are well, lets start votingg!!!",
          // "success"
          "https://github.com/AbuBakrKhan24/e-com-animeStore_front-end/blob/main/my%20resources/oh%20yeah.gif?raw=true"
        );
        router.push("/profile");
        // Verify token
        //
        fetch("https://anime-poll-api.herokuapp.com/users/users/verify", {
          // fetch("http://localhost:6969/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);
            // window.localStorage.setItem("user", JSON.stringify(user));

            // console.log(data);
          });
      }
    },

    // UPDATE A USER
    updateUserInfo: async (context, payload) => {
      console.log(payload);
      fetch(
        "https://anime-poll-api.herokuapp.com/users/update-user/" + payload.id,
        // "http://localhost:6969/users/update-user/" + payload.id,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((payload) => context.commit("setUserUpdate", payload));
      swal(
        "Your Update was successful!",
        "Hope you happy about your changes.",
        "success"
      );

      console.log(
        `User ${(payload.username, payload.email)} was updated successfully`
      );
    },

    // Categories
    // SHOW ALL OF Categories
    getCategories: async (context) => {
      // fetch("http://localhost:6969/categories")
      fetch("https://anime-poll-api.herokuapp.com/categories")
        .then((res) => res.json())
        .then((data) => context.commit("setCategories", data))
        .catch((err) => console.log(err.message));
    },
    // SHOW ALL elections
    getElections: async (context) => {
      // fetch("http://localhost:6969/elections/")
      fetch("https://anime-poll-api.herokuapp.com/elections")
        .then((res) => res.json())
        .then((data) => context.commit("setElections", data))
        .catch((err) => console.log(err.message));
    },

    // SHOW ONE Category
    getCategory: async (context, id) => {
      // fetch("http://localhost:6969/categories/" + id)
      fetch("https://anime-poll-api.herokuapp.com/categories/" + id)
        .then((response) => response.json())
        .then((json) => context.commit("setCategory", json));
    },
    // SHOW ONE Category/section
    getCategorySection: async (context, id) => {
      fetch("https://anime-poll-api.herokuapp.com/elections/category/" + id)
        // fetch("http://localhost:6969/elections/category/" + id)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setCategorySection", json);
        });
    },

    // ADD A Category
    addBook: async (context, book) => {
      fetch("https://anime-poll-api.herokuapp.com/categories", {
        // fetch("http://localhost:6969/categories", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProduct", json));
    },
    // DELETE A USER
    deleteUser: async (context, id) => {
      // fetch("http://localhost:6969/users/" + id, {
      fetch("https://anime-poll-api.herokuapp.com/users/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // Add an election
    AddPoll: async (context, poll) => {
      // const { category_ID, user_ID, election_ID } = poll;
      console.log(poll);
      // const res = await fetch("http://localhost:6969/pollscategory/add_polls", {
      const res = await fetch(
        "https://anime-poll-api.herokuapp.com/pollscategory/add_polls",
        {
          method: "POST",
          body: JSON.stringify(poll),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((polls) => {
          console.log(polls);
        });
      // console.log(res);
    },
    // Voting
    Vote: async (context, payload) => {
      // console.log(payload);
      const res = await fetch(
        // "http://localhost:6969/elections/vote_count/" + payload.id,
        "https://anime-poll-api.herokuapp.com/elections/vote_count/" +
          payload.id,
        {
          method: "PUT",
          body: JSON.stringify({
            vote_count: payload.vote,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((vote) => {
          console.log(vote);
        });
      context.commit("setVote", payload.vote);

      console.log(res);
    },
    // Getting the poll
    getPoll: async (context, id) => {
      // fetch("http://localhost:6969/pollscategory")
      fetch("https://anime-poll-api.herokuapp.com/pollscategory")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setPolls", json);
        });
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
