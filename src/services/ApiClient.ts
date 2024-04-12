import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "90742fe3e17a458ebb6b1314616d3bd6",
  },
});
