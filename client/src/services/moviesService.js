import axios from 'axios';

const URL = 'http://localhost:5050/api'

class MoviesService {
    getToken() {
        return localStorage.getItem('token');
      }

    async getMovies() {
      
      const res = await axios.get(URL+'/get-movies', {
        headers: {
            Authorization: 'Bearer ' + this.getToken(),
          },
      });
  
      return res;
    }

    async getMovieById(id) {
      
        const res = await axios.get(URL+'/get-movie/'+id, {
          headers: {
              Authorization: 'Bearer ' + this.getToken(),
            },
        });
        console.log(res)
        return res;
      }
  
    
  
  }
  
  export default new MoviesService();