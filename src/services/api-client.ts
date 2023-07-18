import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "59414abf95264d84afc4e6a76d1418cf",
  },
});
