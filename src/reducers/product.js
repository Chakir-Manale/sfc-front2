import {GET_ALL_PRODUCTS} from "../constants/action-types";

const initialState = {
    products: [],
    currentPage: 1,
    totalPages: 1,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.products,
                currentPage: action.currentPage,
                totalPages: action.totalPages
            };
        default:
            return state;
    }
};

export default productReducer;