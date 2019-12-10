import axios from "axios";

export const showOverlay = val => {
  return {
    type: "SHOW_OVERLAY",
    payload: val
  };
};

export const fetchDataAndShowOverlay = alphaValue => dispatch => {
  dispatch({ type: "FETCH_LOADING" });
  axios.get(`http://localhost:3001/person/${alphaValue}`).then(
    res => {
      dispatch({ type: "ADD_PERSON_DATA", payload: res.data[0] });
      axios.get(`http://localhost:3001/facility/${res.data[0].val1}`).then(
        res => {
          dispatch({ type: "ADD_FACILITY_DATA", payload: res.data[0] });
          axios.get(`http://localhost:3001/exposure/${res.data[0].val2}`).then(
            res => {
              dispatch({ type: "ADD_EXPOSURE_DATA", payload: res.data[0] });
              dispatch({ type: "FETCH_SUCCESSFULL" });
              dispatch({ type: "SHOW_OVERLAY", payload: true });
            },
            err => {
              dispatch({ type: "FETCH_FAILED" });
            }
          );
        },
        err => {
          dispatch({ type: "FETCH_FAILED" });
        }
      );
    },
    err => {
      dispatch({ type: "FETCH_FAILED" });
    }
  );
};
