import DataReducer from "./DataReducer";
import UIReducer from "./UIReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ UIReducer, DataReducer });

export default rootReducer;
