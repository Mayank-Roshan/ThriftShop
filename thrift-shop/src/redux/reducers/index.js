import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer, //allProducts is key, can have any name.
})

export default reducers;