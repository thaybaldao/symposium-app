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
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("subscribed", JSON.stringify(response.data.subscribed));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("subscribed");
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    } else {
      return null;
    }
  }

  getToken() {
    return localStorage.getItem("token") || null;
  }

  getIsSubscribed() {
    if(localStorage.getItem("subscribed") === null || localStorage.getItem("subscribed") === "false"){
      return false;
    }
    return true;
  }

  setIsSubscribed() {
    localStorage.setItem("subscribed", "true");
  }

}

export default new AuthService();
