import axios from "axios";

const instance = axios.create({
  baseURL: __myapp.env.TMDB_API,
});

instance.defaults.headers.common.Authorization = `Bearer ${__myapp.env.TOKEN}`;

export default instance;
