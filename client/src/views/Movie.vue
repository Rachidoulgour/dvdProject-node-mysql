<template>
  <div>
    <div>
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
  name: "Movie",
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    getMovie() {
      console.log(this.$route.params.id);
      MoviesService.getMovieById(this.$route.params.id)
        .then((res) => {
          console.log(res.data.movie);
          return res.data.movie;
        })
        .then((movie) => (this.movie = movie))
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
