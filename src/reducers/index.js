import { combineReducers } from "redux";
import Crud from "./Crud_Reducers";

const rootRecord = combineReducers({
    crud : Crud
})

export default rootRecord;