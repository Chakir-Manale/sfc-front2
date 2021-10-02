import { SEND_CONTACT_MESSAGE } from "../constants/action-types";


const initialState = {
    email: "",
    fullName: "",
    subject: "",
    message: "",
    phoneNumber: "",
};

const userReducer = (state = initialState, action ) => {
    switch ( action.type ) {
        case SEND_CONTACT_MESSAGE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default userReducer;