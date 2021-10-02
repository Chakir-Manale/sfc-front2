import axios from 'axios';
import {
    GET_BLOG_ARTICLES
} from "../constants/action-types";


// get all articles
export const getArticles = () => async dispatch => {
    console.log("here!");
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);

    dispatch({
        type: GET_BLOG_ARTICLES,
        articles: res.data.entities,
    });
};