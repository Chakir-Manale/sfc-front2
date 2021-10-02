import {
    CLEAR_CART_LIST,
    GET_CART_LIST,
    REFRESH_CART_LIST,
    GET_MY_ORDERS_LIST,
    SAVE_ORDER
} from "../constants/action-types";

import { findIndex } from "../utils";

const initialState = {
    cartlist_variants: [],
    cartlist_packs: [],
    total: 0,
    sellingPrice: 0,
    my_orders: []
};

const cartReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_CART_LIST: 
            return {
                ...state,
                cartlist_variants: action.cartlist_variants,
                cartlist_packs: action.cartlist_packs,
                total: action.total,
                sellingPrice: action.sellingPrice
            }
        case CLEAR_CART_LIST: 
            return {
                ...state,
                cartlist_variants: action.cartlist_variants,
                cartlist_packs: action.cartlist_packs,
                total: action.total,
                sellingPrice: action.sellingPrice
            }
        case REFRESH_CART_LIST: 
            return {
                ...state,
                cartlist_variants: action.cartlist_variants,
                cartlist_packs: action.cartlist_packs,
                total: action.total,
                sellingPrice: action.sellingPrice
            }
        case GET_MY_ORDERS_LIST: 
            return {
                ...state,
                my_orders: action.my_orders,
            }
        case SAVE_ORDER:
            return {
                ...state,
            }
        /*case ADD_TO_CART:
            const productId = action.product.id;

            if ( findIndex( state.cart, product => product.id === productId ) !== -1 ) {
                const cart = state.cart.reduce( ( cartAcc, product ) => {
                    if ( product.id === productId ) {
                        cartAcc.push( { ...product, qty: parseInt( product.qty ) + parseInt( action.qty ), sum: ( product.discount ? product.salePrice : product.price ) * ( parseInt( product.qty ) + parseInt( action.qty ) ) } ) // Increment qty
                    } else {
                        cartAcc.push( product )
                    }
                    return cartAcc
                }, [] )

                return { ...state, cart }
            }

            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.product,
                        qty: action.qty,
                        sum: ( action.product.discount ? action.product.salePrice : action.product.price ) * action.qty
                    }
                ]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter( item => item.id !== action.productId )
            };

        case CHANGE_QTY:
            const cart = state.cart.reduce( ( cartAcc, product ) => {
                if ( product.id === action.productId ) {
                    cartAcc.push( { ...product, qty: action.qty, sum: ( product.discount ? product.salePrice : product.price ) * action.qty } ) // Increment qty
                } else {
                    cartAcc.push( product )
                }
                return cartAcc;
            }, [] )

            return { ...state, cart };

        case REFRESH_STORE:
            return { ...state, cart: [], shipping: "free" };

        case CHANGE_SHIPPING:
            return { ...state, shipping: action.shipping };
        */
        default:
            return state;
    }
};

export default cartReducer;