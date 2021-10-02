import axios from 'axios';
import {
    SAVE_ORDER,
    CLEAR_CART_LIST,
    GET_CART_LIST,
    REFRESH_CART_LIST,
    GET_MY_ORDERS_LIST
} from "../constants/action-types";

import store from '../store';
import {toast} from "react-toastify";

const notifySaveAddress = () => {
    toast.success('Votre Nouveau Addresse à bien enregistrer', {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
}

const notifySaveOrder = () => {
    toast.success('Votre Commande est bien ajouté', {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
}

const notifyAdd = () => {
    toast.success('Bien Ajouté au Panier', {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
}

const notifyErr = () => {
    toast.error('Vous devez être connecter pour ajouter au panier!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000
    })
}

const notifyRemove = () => {
    toast.warn('Bien Supprimé du panier', {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
}

// get all products in cart list
export const getCartList = () => async dispatch => {

    if (store.getState().user.isLogged) {

        const token = store.getState().user.token;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/cart`, config);

        dispatch({
            type: GET_CART_LIST,
            cartlist_variants: res.data.variants,
            cartlist_packs: res.data.packs,
            total: res.data.stats.total,
            sellingPrice: res.data.stats.sellingPrice,
        });
    }
}

//clear cart list when user logout
export const clearCashList = () => async dispatch => {

    dispatch({
        type: CLEAR_CART_LIST,
        cartlist_variants: [],
        cartlist_packs: [],
        total: 0,
        sellingPrice: 0
    });

}

//add variant to cart list
export const addVariantToCartlist = (id, qty, reset) => async dispatch => {

    if (store.getState().user.isLogged) {

        const token = store.getState().user.token;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }

        }

        let params = {
            qty,
            reset
        }

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/variant/${id}`, params, config);
        notifyAdd();

        dispatch({
            type: REFRESH_CART_LIST,
            cartlist_variants: res.data.variants,
            cartlist_packs: res.data.packs,
            total: res.data.stats.total,
            sellingPrice: res.data.stats.sellingPrice,

        });
    } else {
        notifyErr();
    }
}

//add pack to cart list
export const addPackToCartlist = (id, qty, reset) => async dispatch => {
    if (!store.getState().user.isLogged) {
        notifyErr();
    } else {
        const token = store.getState().user.token;
        let config = {headers: {'Authorization': 'Bearer ' + token}}

        let params = {qty, reset}

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/pack/${id}`, params, config);

        dispatch({
            type: REFRESH_CART_LIST,
            cartlist_variants: res.data.variants,
            cartlist_packs: res.data.packs,
            total: res.data.stats.total,
            sellingPrice: res.data.stats.sellingPrice,

        });
    }
}

//remove from cart list
export const removeVariantFromCartlist = (id) => async dispatch => {

    const token = store.getState().user.token;

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/cart/variant/${id}`, config).then(toast.success("Successfully removed from cart"));
    notifyRemove();

    dispatch({
        type: REFRESH_CART_LIST,
        cartlist_variants: res.data.variants,
        cartlist_packs: res.data.packs,
        total: res.data.stats.total,
        sellingPrice: res.data.stats.sellingPrice,
    })

}

//remove from cart list
export const removePackFromCartlist = (id) => async dispatch => {

    const token = store.getState().user.token;

    let config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }

    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/cart/pack/${id}`, config);
    notifyRemove();

    dispatch({
        type: REFRESH_CART_LIST,
        cartlist_variants: res.data.variants,
        cartlist_packs: res.data.packs,
        total: res.data.stats.total,
        sellingPrice: res.data.stats.sellingPrice,

    });

}

// cart list checkout
export const cartListSaveOrder = ({
                                      paymentMethodKey,
                                      fullName,
                                      phoneNumber,
                                      email,
                                      line1,
                                      line2,
                                      note
                                  }) => async dispatch => {

    const {user} = store.getState()
    if (user.isLogged) {
        const config = {headers: {Authorization: 'Bearer ' + user.token}}
        const params = {fullName, email, note, line1, line2, phoneNumber}

        if (paymentMethodKey === 'CMI') {
            return await axios.post(`${process.env.REACT_APP_API_URL}/payments/cmi`, params, config);
        } else {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/cart/checkout`, params, config);
            notifySaveOrder();

            return res;
        }
        /*dispatch({
            type: GET_CART_LIST,
            cartlist_variants: res.data.variants,
            cartlist_packs: res.data.packs,
            total: res.data.stats.total,
            sellingPrice: res.data.stats.sellingPrice,
        });*/
    }
}
// cart list get orders
export const getCartListOrders = () => async dispatch => {

    if (store.getState().user.isLogged) {

        const token = store.getState().user.token;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/orders/my-orders`, config);

        dispatch({
            type: GET_MY_ORDERS_LIST,
            my_orders: res.data
        });
    }
}

// save order address
export const saveAddress = (fullname, phone, email, adressl1, adressl2) => async dispatch => {

    if (store.getState().user.isLogged) {

        const token = store.getState().user.token;

        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        let params = {
            "user": {
                "id": store.getState().user.user.id
            },
            "line1": adressl1,
            "line2": adressl2,
            "fullName": fullname,
            "email": email,
            "phoneNumber": phone
        }

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/addresses`, params, config);

        notifySaveAddress();

        dispatch({
            type: SAVE_ORDER,
        });
    }
}