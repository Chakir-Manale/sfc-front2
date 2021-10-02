import axios from 'axios';
import {GET_ALL_AREAS, GET_ALL_ROLES, LOGIN, LOGOUT, REGISTER, PROFILE} from "../constants/action-types";
import {toast} from "react-toastify";
import store from "../store";


const API_URL = process.env.REACT_APP_API_URL;

// login User Action
export const loginUser = (username, password) => async dispatch => {

    //const logged = false;
    //const [logged, setLogged] = useState(true)

    const obj = await axios.post(`${API_URL}/auth/login`, {username, password});

    let config = {
        headers: {
            'Authorization': 'Bearer ' + obj.data.token
        }
    }
    const user = await axios.get(`${API_URL}/auth/me`, config);

    localStorage.setItem('user', JSON.stringify(user.data));
    localStorage.setItem('usertoken', obj.data.token);
    localStorage.setItem('userislogged', true);

    if (obj.data.token != "") {
        dispatch({
            type: LOGIN,
            isLogged: true,
            token: obj.data.token,
            user: user.data
        }).then(
            window.location.href = '/'
        );
    }

}

// login User Action
export const profileUser = () => async dispatch => {

    let config = {
        headers: {
            'Authorization': 'Bearer ' + store.getState().user.token
        }
    }

    const user = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, config);


    dispatch({
        type: PROFILE,
        user: user.data
    });


}

//get roles
export const getAllRoles = (p) => async dispatch => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/roles`);

    dispatch({
        type: GET_ALL_ROLES,
        roles: res.data.entities,
    });
}
//get areas
export const getAllAreas = (p) => async dispatch => {

    const res = await axios.get(`${process.env.REACT_APP_API_URL}/areas`);

    dispatch({
        type: GET_ALL_AREAS,
        areas: res.data.entities,
    });
}
// login User Action
export const registerUser = (email, firstName, lastName, username, password, role, addresses, phoneNumbers, gender) => async dispatch => {

    console.log(`/users`, email, firstName, lastName, username, password, role, addresses, phoneNumbers, gender);
    const obj = await axios.post(`${API_URL}/users`, {
        email,
        firstName,
        lastName,
        username,
        password,
        role,
        addresses,
        phoneNumbers,
        gender
    });

    dispatch({
        type: REGISTER,
    }).then(
        window.location.href = '/pages/login',
        toast.info("Votre Compte à été bien crée. Vous pouvez maintenant vous connecter!"),
    );
}

// logout User Action
export const logoutUser = () => async dispatch => {

    localStorage.removeItem('user');
    localStorage.setItem('userislogged', false);
    localStorage.setItem('usertoken', "");

    dispatch({
        type: LOGOUT,
        isLogged: false,
        token: "",
        user: {}
    });


}