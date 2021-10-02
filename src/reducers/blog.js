import {
    GET_BLOG_ARTICLES
} from "../constants/action-types";


const initialState = {
    articles: []
};

const blogReducer = (state = initialState, action) => {
    console.log("blog reducer");
    switch (action.type) {
        case GET_BLOG_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        default:
            return state;
    }
};

export default blogReducer;