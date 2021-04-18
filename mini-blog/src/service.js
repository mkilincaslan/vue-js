import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_URL
});

instance.defaults.headers["Accept"] = "application/json";

export default instance;