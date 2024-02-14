import api from "../api";

interface dataLogin {
  email: string;
  password: string;
}

interface dataRegister {
  email: string;
  password: string;
  password2: string;
  firstName: string;
  secondName: string;
  CPF: string;
  phone: string;
}

export default {
  async login(data: dataLogin) {
    try {
      const response = api.post("/login", data, {
        withCredentials: true,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },

  async register(data: dataRegister) {
    try {
      const response = api.post("/user", data);
      return response;
    } catch (e) {
      console.log(e);
    }
  },

  async getDetails() {
    try {
      const response = api.get("/user", {
        withCredentials: true,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  },
};
