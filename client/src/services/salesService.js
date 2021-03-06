import axios from 'axios';

const URL = 'http://localhost:5050/api'

class SalesService {
    getToken() {
        return localStorage.getItem('token');
      }

      async buyMovie(movie_id, user_id) {

        const res = await axios.post(URL+'/create-sale', { params: { movie_id, user_id }}, {
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
    async getClients() {
      
      const res = await axios.get(URL+'/clients', {
        headers: {
            Authorization: this.getToken(),
          },
      });
      
      return res;
    }

    //Purchases by user
    async getPurchasesUser(id) {
      
      const res = await axios.get(URL+'/purchases/' + id, {
        headers: {
            Authorization: this.getToken(),
          },
      });
      
      return res;
    }
    
    //Return the movie
    async returnMovie(id, userId) {
      
      const res = await axios.put(URL+'/return-sale', { params: { id, userId }}, {
        headers: {
            Authorization: this.getToken(),
          },
      });
      
      return res;
    }
  
  }
  
  export default new SalesService();