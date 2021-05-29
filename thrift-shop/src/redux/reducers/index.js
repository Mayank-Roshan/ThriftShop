import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer, //allProducts is key, can have any name.
    product : selectedProductReducer // we use this at the product detail component
})

export default reducers;