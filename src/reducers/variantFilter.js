
import { ADD_FILTER_BY_BRAND_SLUG, ADD_FILTER_BY_CATEGORY_SLUG, ADD_FILTER_BY_PRICE_RANGE, ADD_FILTER_BY_SEARCH_KEYWORD, RESET_VARIANT_FILTERS, REFRESH_VARIANT_FILTERS }  from '../constants/action-types'

const initialState = {
    price: { min: 0, max: 10000 },
    sortBy: "asc",
    category: "",
    brand: "",
    search: ""
}

function variantFilterReducer(state = initialState, action ) {
    switch ( action.type ) {

        case ADD_FILTER_BY_BRAND_SLUG:
            return {
                ...state,
                brand: action.brand
            };

        case ADD_FILTER_BY_CATEGORY_SLUG:
            return {
                ...state,
                category: action.category
            };

        case ADD_FILTER_BY_PRICE_RANGE:
            return {
                ...state,
                price: action.price,
            };

        case ADD_FILTER_BY_SEARCH_KEYWORD:
            return {
                ...state,
                search: action.search
            };

        case RESET_VARIANT_FILTERS:
            return {
                price: { min: 0, max: 10000 },
                sortBy: "asc",
                category: "",
                brand: "",
                search: ""
            };

        case REFRESH_VARIANT_FILTERS:
            return { state: initialState };

        default:
            return state;
    }
}

export default variantFilterReducer;