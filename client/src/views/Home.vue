<template>
  <div>
    <div v-if="(user.role =='USER')"><Header /></div>
    <div v-if="user.role === 'ADMIN'">
      <AdminHeader />
    </div>

    <div v-for="movie in movies" :key="movie.id">
      <router-link :to="`/movie/${movie.id}`">
        <a-card :title="movie.name" style="width: 300px">
          <p>{{ movie.genre }}</p>
          <p>Price: {{ movie.price }}€</p>
        </a-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import AdminHeader from "../components/AminHeader";
import { AuthService, MoviesService } from "../services/services";
export default {
  name: "Home",
  components: {
    AdminHeader,
    Header,
  },
  data() {
    return {
      movies: [],
      user: {},
    };
  },
  mounted() {
    this.getAllMovies();
    this.getUser();
  },
  methods: {
    getAllMovies() {
      MoviesService.getMovies()
        .then((res) => {
          return res.data.movies;
        })
        .then((movies) => (this.movies = movies))
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movies couldn't be get",
          });
        });
    },

    getUser() {
      this.user = AuthService.getUser();
    },
  },
};
</script>
