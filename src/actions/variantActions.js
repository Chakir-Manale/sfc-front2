import axios from 'axios';
import {
    GET_VARIANT_BY_CATEGORY_SLUG,
    GET_VARIANT_DETAIL,
    GET_VARIANT_BY_CATEGORY,
    GET_ALL_VARIANTS, GET_SIMILAR_PRODUCTS
} from "../constants/action-types";


import store from '../store';

// get all variants
export const getAllVariants = (p) => async dispatch => {

    //const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`);

    console.log(store.getState().variantfilters.search);
    console.log(store.getState().variantfilters.category);
    console.log(store.getState().variantfilters.brand);

    const variantfilters = store.getState().variantfilters;

    let metadata = {
        "pagination": {
            "page": p
        },
        "sort": {
            "field": "id",
            "asc": true
        },
        "filters": {
            "search": variantfilters.search ? variantfilters.search : "",
        },
        "columns": {
            "*": [],
            "product": {
                "*": [],
                "categories": {
                    "*": []
                }
            }
        }
    }

    if (variantfilters.category) {
        metadata.filters.categories = {"slug": variantfilters.category}
    }

    console.log("MetaData : ", metadata);

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`, {params: {meta: metadata}});

    dispatch({
        type: GET_ALL_VARIANTS,
        variants: res.data.entities,
        currentPage: res.data.meta.pagination.page,
        totalPages: res.data.meta.pagination.pages
    });

}

export const getAllVariantsWithFilters = (page) => async dispatch => {

    //const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`);

    console.log(store.getState().variantfilters.search);
    console.log(store.getState().variantfilters.category);

    const variantfilters = store.getState().variantfilters;

    let metadata = {
        "pagination": {
            "page": page
        },
        "sort": {
            "field": "id",
            "asc": false
        },
        "filters": {
            "search": variantfilters.search ? variantfilters.search : "",
        },
        "columns": {
            "*": [],
            "product": {
                "*": [],
                "categories": {
                    "*": []
                }
            }
        }
    }

    if (variantfilters.category) {
        metadata.filters.categories = {"slug": variantfilters.category}
    }

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`, {params: {meta: metadata}});

    dispatch({
        type: GET_ALL_VARIANTS,
        variants: res.data.entities,
        currentPage: res.data.meta.pagination.page,
        totalPages: res.data.meta.pagination.pages
    });

}

export const getVariantDetail = (id) => async dispatch => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants/${id}`);

    dispatch({
        type: GET_VARIANT_DETAIL,
        variantDetail: res.data
    });
}

// get variants by specified category
export const getVariantsByCategory = (id) => async dispatch => {

    const metadata = {
        "sort": {
            "field": "id",
            "asc": true
        },
        "filters": {
            "search": "",
            "categories": {
                "id": id
            }
        },
        "columns": {
            "*": [],
            "product": {
                "*": [],
                "categories": {
                    "*": []
                }
            }
        }
    }
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`, {params: {meta: metadata}});

    dispatch({
        type: GET_VARIANT_BY_CATEGORY,
        variantsByCategory: res.data.entities,
    });
}

//Similar products
export const getSimilarProducts = (id) => async dispatch => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants/by/category/` + id);

    dispatch({
        type: GET_SIMILAR_PRODUCTS,
        similarProducts: res.data,
    });

}

export const getVariantsByCategoryWithSlug = (slug) => async dispatch => {

    const metadata = {
        "pagination": {
            "page": 1,
            "perPage": 20
        },
        "sort": {
            "field": "id",
            "asc": true
        },
        "filters": {
            "search": "",
            "categories": {
                "slug": slug
            }
        },
        "columns": {
            "*": [],
            "product": {
                "*": [],
                "categories": {
                    "*": []
                }
            }
        }
    }

    if (typeof slug == 'string') {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/variants`, {params: {meta: metadata}});

        dispatch({
            type: GET_VARIANT_BY_CATEGORY_SLUG,
            variantsByCategorySlug: res.data.entities,
        });
    }


}

