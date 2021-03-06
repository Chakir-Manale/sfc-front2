import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/auth/login`;

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();