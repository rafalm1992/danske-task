const initialState = {
  isOverlayActive: false,
  fetchLoading: false,
  fetchSuccessful: false,
  fetchFailed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_OVERLAY":
      return { ...state, isOverlayActive: action.payload };
    case "FETCH_LOADING":
      return { ...state, fetchLoading: true };
    case "FETCH_SUCCESSFULL":
      return { ...state, fetchLoading: false, fetchSuccessful: true };
    case "FETCH_FAILED":
      return {
        ...state,
        fetchLoading: false,
        fetchSuccessful: false,
        fetchFailed: true
      };
    default:
      return state;
  }
};
