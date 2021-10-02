import axios from 'axios';
import { GET_CATEGORIES } from "../constants/action-types";

// get all categories
export const getAllCategories = () => async dispatch => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);

    dispatch({
        type: GET_CATEGORIES,
        categories: res.data.entities,
    });
    
}