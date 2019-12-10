const initialState = {
  person: [],
  facility: [],
  exposure: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON_DATA":
      return { ...state, person: action.payload };
    case "ADD_FACILITY_DATA":
      return { ...state, facility: action.payload };
    case "ADD_EXPOSURE_DATA":
      return { ...state, exposure: action.payload };
    default:
      return state;
  }
};
