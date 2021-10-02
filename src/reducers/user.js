import {GET_ALL_AREAS, GET_ALL_ROLES, LOGIN, LOGOUT, PROFILE, REGISTER} from "../constants/action-types";

let uData = localStorage.getItem('user');
let uToken = localStorage.getItem('usertoken');
let uLogged = localStorage.getItem('userislogged');
const userData = JSON.parse(uData);
const userToken = uToken;
const userIsLogged = uLogged;

const initialState = {
    isLogged: userIsLogged !== "false" ? userIsLogged : false,
    token: userToken ? userToken : "",
    user: userData ? userData : {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: action.isLogged,
                token: action.token,
                user: action.user
            };
        case LOGOUT:
            return {
                ...state,
            };
        case REGISTER:
            return {
                ...state,
                isLogged: action.isLogged,
                token: action.token,
                user: action.user
            };
        case GET_ALL_ROLES:
            return {
                ...state,
                roles: action.roles,
            };
        case GET_ALL_AREAS:
            return {
                ...state,
                areas: action.areas,
            };
        case PROFILE:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default userReducer;