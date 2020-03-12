import axios from "axios";

const API_TOKEN = "Bearer 911082ce-1826-31f4-a556-378ea336ab29";

export default axios.create({
  baseURL: "https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0",
  headers: { Authorization: API_TOKEN }
});
