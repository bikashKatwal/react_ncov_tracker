import axios from 'axios';

const API_TOKEN = 'Bearer 73ab157d-c13f-34af-8420-8f5e72ba0297';

export default axios.create({
	baseURL: 'https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0',
	headers: { Authorization: API_TOKEN },
});
