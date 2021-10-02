import axios from 'axios';
import {CLEAR_WISH_LIST, GET_WISH_LIST, REMOVE_FROM_WISH_LIST, ADD_TO_WISH_LIST} from "../constants/action-types";

import store from '../store';
import {toast} from "react-toastify";

// get all products in wish list
export const getWishList = () => async dispatch => {

    if (store.getState().user.isLogged) {

        const token = store.getState().user.token;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/wishlist`, config);

        dispatch({
            type: GET_WISH_LIST,
            wishlist: res.data.entities,
            total: res.data.stats.total,
        });
    }

}

//clear wish list when user logout
export const clearWishList = () => async dispatch => {

    dispatch({
        type: CLEAR_WISH_LIST,
        wishlist: [],
        total: 0,
    });

}

//add to wish list
export const addToWishlist = (id) => async dispatch => {

    if (store.getState().user.isLogged) {

        const token = store.getState().user.token;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/wishlist/${id}`, {}, config);
        console.log(res);

        dispatch({
            type: ADD_TO_WISH_LIST,
            wishlist: res.data.entities,
            total: res.data.stats.total,
        });
    } else {
        toast.warning("Vous devez etre connectés!");
    }

}

//remove from wish list
export const removeFromWishlist = (id) => async dispatch => {

    const token = store.getState().user.token;

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/wishlist/${id}`, config);

    dispatch({
        type: REMOVE_FROM_WISH_LIST,
        wishlist: res.data.entities,
        total: res.data.stats.total,
    });

}