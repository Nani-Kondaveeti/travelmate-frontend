import axios from "axios";

const API_URL = "https://travelmate-backend-production-4740.up.railway.app";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;