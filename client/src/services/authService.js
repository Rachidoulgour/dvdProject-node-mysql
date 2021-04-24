import axios from 'axios';

const URL = 'http://localhost:5050/api'

class AuthService {
  async login(user) {
    console.log(user)
    const res = await axios.post(URL+'/signin', user, {
      
    });

    return res;
  }

}

export default new AuthService();
