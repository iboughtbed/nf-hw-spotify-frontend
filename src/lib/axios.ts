import axios from "axios";

const api = axios.create({
  baseURL: "https://nf-hw-spotify-backend-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
