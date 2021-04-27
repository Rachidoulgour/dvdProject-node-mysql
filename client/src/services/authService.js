import axios from 'axios';

const URL = 'http://localhost:5050/api'

class AuthService {
  getToken() {
    return localStorage.getItem('token');
  }

  async login(user) {
    
    const res = await axios.post(URL + '/signin', user, {

    });

    return res;
  }

  async signup(user) {
    
    const res = await axios.post(URL + '/signup', user, {

    });

    return res;
  }

  //GetAllUsers
  async getUsers() {
      
    const res = await axios.get(URL+'/users', {
      headers: {
          Authorization: this.getToken(),
        },
    });
    
    return res;
  }

  //get usr from localhost
  getUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != "undefined") {
      this.user = user
    } else {
      this.user = null;
    }
    return this.user;
  }

  //If is logged in
  loggedIn(){
    return !!localStorage.getItem('token') && !!localStorage.getItem('user');
  }
  //To Log Out
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.$router.push('/login')
  }

}

export default new AuthService();