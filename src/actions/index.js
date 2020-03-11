import apis from './../apis/ncovapi';

export const fetchCases = () => async dispatch => {
	const response = await apis.get(`Australia`);
	console.log(response);
	dispatch({ type: 'FETCH_CASES', payload: response.data });
};
