import { combineReducers } from 'redux';

// Import custom components
import compareReducer from './compare';
import filterReducer from './filter';
import modalReducer from './modal';
import categoryReducer from "./category";
import userReducer from "./user";
import productReducder from "./product";
import variantReducer from "./variant";
import variantFilterReducer from "./variantFilter";
import cartReducer from './cartReducer';
import wishlistReducer from "./wishlistReducer";
import blogReducer from "./blog";

const rootReducer = combineReducers( {
    data: productReducder,
    compare: compareReducer,
    filters: filterReducer,
    modal: modalReducer,
    blog: blogReducer,
    cartlist: cartReducer,
    categories: categoryReducer,
    user: userReducer,
    variants: variantReducer,
    variantfilters: variantFilterReducer,
    products: productReducder,
    usercartlist: cartReducer,
    userwishlist: wishlistReducer,
} );

export default rootReducer;