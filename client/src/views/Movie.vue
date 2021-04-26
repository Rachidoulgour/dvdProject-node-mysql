<template>
  <div>
    <div>
      <a-card :title="movie.name" style="width: 300px">
        <p>{{ movie.genre }}</p>
        <p>Price: {{ movie.price }}€</p>

        <div>
          <a-button type="primary" @click="showModal(movie.id)">
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
          <a-button type="primary" @click="buyMovie(movie.id)">
            Buy
          </a-button>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { MoviesService, SalesService } from "../services/services";
export default {
  name: "Movie",
  data() {
    return {
        user: "",
      movie: {},
      ModalText: "Do you want delete this movie?",
      visible: false,
      confirmLoading: false,
    };
  },
  mounted() {
    this.getMovie();
    this.getUser()
  },
  methods: {
    // Load movies
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
    buyMovie(movie_id){
        // let user = this.getUser()
        
        SalesService.buyMovie(movie_id, this.user.id)
        .then(res => {
            console.log(res)
        }
            
            // this.$router.push('/home')
        )
        .catch((err) => {
          console.error(err);
          this.$notification.error({
            message: "Movie couldn't be added",
          });
        });
    },

    //Getting logued user
    getUser(){
        let user = JSON.parse(localStorage.getItem('user'));
    if(user != "undefined"){
      this.user = user
    }else{
      this.user = null;
    }
    return this.user;
    }
  },
};
</script>
