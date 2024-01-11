import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8bec35c21ba240e48ad516792cac12ad",
  },
});
