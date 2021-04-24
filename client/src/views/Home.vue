<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <a-card :title="movie.name" style="width: 300px">
        <p>{{ movie.genre }}</p>
        <p>Price: {{ movie.price }}€</p>
      </a-card>
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
            message: "No hemos podido obtener el listado de empleados",
          });
        });
    },
  },
};
</script>
