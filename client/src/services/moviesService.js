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
  
    
  
  }
  
  export default new MoviesService();