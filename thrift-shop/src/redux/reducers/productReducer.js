import { ActionTypes } from "../constants/action-types";

const initialState = {
    products : [{
        id:14,
        title:"MRM-13",
        category:"Developer"
    }]
}

export const productReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return state;
            
        default:
            return state;
    }
}