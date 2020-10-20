import axios from "axios";

const API_URL = "http://localhost:4000/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email: email,
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
