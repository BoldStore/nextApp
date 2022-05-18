import axios from "axios";
import { API_URL } from "./constants";
import { auth } from "./firebaseConfig";

const instance = axios.create({
  timeout: 15000,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

instance.interceptors.request.use(async (request) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const token = await user.getIdToken();
      request.headers!["Authorization"] = "Bearer " + token;
    } catch (e) {
      console.log("There was an error", e);
    }
  }

  return request;
});

export default instance;
