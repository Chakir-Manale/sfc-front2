import {
    GET_BLOG_ARTICLES, GET_POST_DETAIL
} from "../constants/action-types";


const initialState = {
    articles: [],
    currentPage: 1,
    totalPages: 1,
    postDetail: {},
    totalPosts: 0,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BLOG_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        case GET_POST_DETAIL:
            return {
                ...state,
                postDetail: action.postDetail
            };
        default:
            return state;
    }
};

export default blogReducer;