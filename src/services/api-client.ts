import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "51d32472b02d49db9c66af13fb7bac3a",
  },
});
