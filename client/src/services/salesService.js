import axios from 'axios';

const URL = 'http://localhost:5050/api'

class SalesService {
    getToken() {
        return localStorage.getItem('token');
      }

      async buyMovie(movie) {
        const token = this.getToken()
        console.log(token)
        const res = await axios.post(URL+'/create-sale', movie, {
          headers: {
              Authorization: this.getToken(),
            },
        });
    
        return res;
      }

    async getSales() {
      
      const res = await axios.get(URL+'/sales', {
        headers: {
            Authorization: this.getToken(),
          },
      });
  
      return res;
    }
  
    
  
  }
  
  export default new SalesService();