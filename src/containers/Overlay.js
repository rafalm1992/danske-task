import React from "react";
import { connect } from "react-redux";
import { showOverlay } from "../actions";

const Overlay = props => {
  const result = props.facilityData.val3 + props.facilityData.val4;
  return (
    <div className="overlayContainer">
      <h1>Result: {result}</h1>
      <button
        onClick={() => {
          props.showOverlay(false);
        }}
      >
        Ok
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    facilityData: state.DataReducer.facility
  };
};

const mapDispatchToProps = { showOverlay };
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
