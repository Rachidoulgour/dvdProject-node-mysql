<template>
  <div class="movie-view">
    <div v-if="(user.role =='USER')"><Header /></div>
    <div v-if="user.role === 'ADMIN'">
      <AdminHeader />
    </div>
    <div class="card-container"> 
      <a-card :title="movie.name" style="width: 300px">
        <p>{{ movie.genre }}</p>
        <p>Price: {{ movie.price }}€</p>

        <div>
          <a-button
            type="primary"
            @click="showModal(movie.id)"
            v-if="user.role === 'ADMIN'"
            :key="user.id"
          >
            Delete Movie
          </a-button>
          <a-modal
            title="Title"
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk(movie.id)"
            @cancel="handleCancel"
          >
            <p>{{ ModalText }}</p>
          </a-modal>
          <a-button
            type="primary"
            @click="buyMovie(movie.id)"
            v-if="(user.role = 'USER')"
          >
            Buy
          </a-button>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import AdminHeader from '../components/AminHeader';
import { AuthService, MoviesService, SalesService } from "../services/services";
export default {
  name: "Movie",
  component: {
    AdminHeader,
    Header
  },
  data() {
    return {
      user: {},
      movie: {},
      ModalText: "Do you want delete this movie?",
      visible: false,
      confirmLoading: false,
    };
  },
  mounted() {
    this.getMovie();
    this.getUser();
  },
  methods: {
    // Load movies
    getMovie() {
      MoviesService.getMovieById(this.$route.params.id)
        .then((res) => {
          return res.data.movie;
        })
        .then((movie) => (this.movie = movie))
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movie couldn't be get",
          });
        });
    },

    //Delete movie
    deleteMovie(id) {
      MoviesService.deleteMovieById(id)
        .then(this.$router.push("/home"))
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movie couldn't be deleted",
          });
        });
    },

    // Handle modal and delete movie
    showModal() {
      this.visible = true;
    },
    handleOk(id) {
      this.ModalText = "The movie has been deleted";
      this.confirmLoading = true;
      this.deleteMovie(id);
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      this.visible = false;
    },

    //Buy movie
    buyMovie(movie_id) {
      // let user = this.getUser()
      SalesService.buyMovie(movie_id, this.user.id)
        .then(
          (res) => {
            if(res){
              this.$router.push('/home');
            }
            
          }
        )
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movie couldn't be added",
          });
        });
    },

    //Getting logued user
    getUser() {
      this.user = AuthService.getUser();
    },
  },
};
</script>
<style>
.movie-view{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
</style>