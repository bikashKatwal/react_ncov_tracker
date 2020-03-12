import apis from "./../apis/ncovapi";

export const fetchCases = country => async dispatch => {
  const response = await apis.get(`/cases?country=${country}`);
  dispatch({ type: "FETCH_CASES", payload: response.data });
};
