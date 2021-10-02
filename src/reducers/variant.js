import {
    GET_VARIANT_BY_CATEGORY_SLUG,
    GET_VARIANT_DETAIL,
    GET_VARIANT_BY_CATEGORY,
    GET_ALL_VARIANTS,
    GET_SIMILAR_PRODUCTS
} from "../constants/action-types";

const initialState = {
    variants: [],
    currentPage : 1,
    totalPages : 1 ,
    variantsByCategory: [],
    variantDetail: {},
    variantsByCategorySlug: [],
};

const variantReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case GET_ALL_VARIANTS:
            return {
                ...state,
                variants: action.variants,
                currentPage : action.currentPage,
                totalPages : action.totalPages
            };
        case GET_VARIANT_BY_CATEGORY:
            return {
                ...state,
                variantsByCategory: action.variantsByCategory
            };
        case GET_SIMILAR_PRODUCTS:
            return {
                ...state,
                similarProducts: action.similarProducts
            };
        case GET_VARIANT_DETAIL:
            return {
                ...state,
                variantDetail: action.variantDetail
            };
        case GET_VARIANT_BY_CATEGORY_SLUG:
            return {
                ...state,
                variantsByCategorySlug: action.variantsByCategorySlug
            };
        default:
            return state;
    }
};

export default variantReducer;