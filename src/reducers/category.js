import { GET_CATEGORIES } from "../constants/action-types";

const initialState = {
    categories: []
};

const categoryReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_CATEGORIES:
            return {
                categories: action.categories
            };
        default:
            return state;
    }
};

export default categoryReducer;