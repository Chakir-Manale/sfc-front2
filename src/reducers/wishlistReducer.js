import { CLEAR_WISH_LIST, GET_WISH_LIST, REMOVE_FROM_WISH_LIST, ADD_TO_WISH_LIST } from "../constants/action-types";

import { findIndex } from "../utils";
import { toast } from 'react-toastify';

const initialState = {
    wishlist: [],
    total : 0,
};

const wishlistReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_WISH_LIST: 
            return {
                wishlist: action.wishlist,
                total : action.total
            }
        case CLEAR_WISH_LIST: 
            return {
                wishlist: [],
                total : 0
            }
        case ADD_TO_WISH_LIST: 
            return {
                wishlist: action.wishlist,
                total : action.total
            }
        case REMOVE_FROM_WISH_LIST: 
            return {
                wishlist: action.wishlist,
                total : action.total
            }
        /*case TOGGLE_WISHLIST:
            const productId = action.product.id;

            if ( findIndex( state.list, product => product.id === productId ) !== -1 ) {
                const list = state.list.reduce( ( cartAcc, product ) => {
                    if ( product.id !== productId ) {
                        cartAcc.push( product );
                    } else
                        toast.error( "Item removed from Wishlist" );
                    return cartAcc
                }, [] )

                return { ...state, list }
            } else
                toast.success( "Item added to Wishlist" );

            return { ...state, list: [ ...state.list, action.product ] }

        case REMOVE_FROM_WISHLIST:
            return {
                wishlists: state.list.filter( item => item.id !== action.productId )
            }

        case REFRESH_STORE:
            return { ...state, list: [] };
        */
       
        default:
            return state;
    }
};

export default wishlistReducer;