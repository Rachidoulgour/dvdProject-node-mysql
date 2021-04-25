<template>
  <div>
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
import { MoviesService } from "../services/services";
export default {
  name: "Home",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.getAllMovies();
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
  },
};
</script>
