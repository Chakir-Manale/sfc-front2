import axios from 'axios';
import {
    GET_BLOG_ARTICLES,
    GET_POST_DETAIL
} from "../constants/action-types";


// get all articles
export const getArticles = () => async dispatch => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);

    dispatch({
        type: GET_BLOG_ARTICLES,
        articles: res.data.entities,
    });
};

export const getPostDetail = (id) => async dispatch => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);

    dispatch({
        type: GET_POST_DETAIL,
        postDetail: res.data
    });
}