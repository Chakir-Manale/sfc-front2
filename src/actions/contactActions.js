import axios from 'axios';
import {SEND_CONTACT_MESSAGE} from "../constants/action-types";
import {toast} from "react-toastify";


const API_URL = process.env.REACT_APP_API_URL;

// login User Action
export const sendContactMessage = (email, fullName, subject, message, phoneNumber) => async dispatch => {


    const obj = await axios.post(`${API_URL}/contact_messages`, {email, fullName, subject, message, phoneNumber});
    toast("Votre message a été bien envoyé!")
    dispatch({
        type: SEND_CONTACT_MESSAGE,
    });

}
