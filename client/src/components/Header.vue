<template>
  <div class="header">
    <ul>
      <div v-if="isLoggedIn === false" :key="1" class="isLoggedIn">
        <li>
          <router-link :to="'/login'">
            <p>Login</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/signup'">
            <p>Signup</p>
          </router-link>
        </li>
      </div>
      <div v-if="isLoggedIn === true" :key="2" class="isLoggedIn">
        <li>
          <router-link :to="'/home'">
            <p>Home</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/my-profile/' + user.id">
            <p>Profile</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/sales'">
            <p v-if="user.role === 'ADMIN'">Sales</p>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import AuthService from "../services/authService";
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      user: {},
      id: "",
    };
  },
  mounted() {
    this.isLogged();
    this.getUser();
  },

  methods: {
    isLogged() {
      this.isLoggedIn = AuthService.loggedIn();
    },

    getUser() {
      this.user = AuthService.getUser();
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  background-color: rgb(44, 184, 165);
  color: white;
  margin: 0 0 60px 0;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.isLoggedIn {
  display: flex;
}
li {
  all: unset;
  margin: 0.1rem 1rem;
  color: white;
}
p {
  color: white;
  margin: 10px 0;
}
</style>
