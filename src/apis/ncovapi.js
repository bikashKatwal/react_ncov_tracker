import axios from "axios";

const API_TOKEN = "Bearer 7539beee-71bf-3429-b084-a930bcee6c7e";

export default axios.create({
  baseURL: "https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0",
  headers: { Authorization: API_TOKEN }
});
