import axios from 'axios';
import {GET_ALL_PRODUCTS} from "../constants/action-types";

import store from '../store';

// get all PRODUCTS
export const getAllProducts = (p) => async dispatch => {

    //const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`);
    let metadata = {
        "pagination": {
            "page": p,
            "perPage": 12
        },
        "sort": {
            "field": "id",
            "asc": true
        },
        "filters": {
            "search": "",
        },
        "columns": {
            "*": [],
            "categories": {
                "*": []
            }
        }
    }

    console.log("MetaData : ", metadata);

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {params: {meta: metadata}});

    dispatch({
        type: GET_ALL_PRODUCTS,
        products: res.data.entities,
        currentPage: res.data.meta.pagination.page,
        totalPages: res.data.meta.pagination.pages
    });

}

