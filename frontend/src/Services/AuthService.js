import axios from "axios";

const API_URL = "http://localhost:4000/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username: username,
        password: password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }
        console.log(response);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();