import React, { useState, useEffect } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { fetchDataAndShowOverlay } from "../actions";
import Overlay from "./Overlay";

const App = props => {
  const [alphaValue, setAlphaValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const resetSettings = () => {
    setAlphaValue("");
    setIsValid(false);
  };
  const handleChange = e => {
    console.log(e.target.value);
    e.target.value >= 0 && e.target.value <= 1 && e.target.value !== ""
      ? setIsValid(true)
      : setIsValid(false);

    setAlphaValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.fetchDataAndShowOverlay(parseFloat(alphaValue));
    resetSettings();
  };
  return (
    <div className="App">
      <div className="inputContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Alpha value (between 0 and 1)"
            value={alphaValue}
            minLength="1"
            maxLength="10"
          />
          <button disabled={!isValid || props.fetchLoading}>Submit</button>
          {props.fetchFailed && !props.fetchLoading && (
            <p>Some difficulties during fetching... Please try again</p>
          )}
          {props.fetchLoading && <p>Loading... </p>}
        </form>
      </div>
      {props.isOverlayActive && <Overlay />}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isOverlayActive: state.UIReducer.isOverlayActive,
    fetchLoading: state.UIReducer.fetchLoading,
    fetchFailed: state.UIReducer.fetchFailed
  };
};

const mapDispatchToProps = { fetchDataAndShowOverlay };
export default connect(mapStateToProps, mapDispatchToProps)(App);
