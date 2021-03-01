import { request } from '../axios';

const REGISTER_USER = "AUTH/REGISTER_USER";
const LOGIN_USER = "AUTH/LOGIN_USER";
const LOGOUT_USER = "AUTH/LOGOUT_USER";

export const registerUser = (registData) => {
    const data = request("post", "api/rest-auth/registration/", registData);
    console.log(data);
    return {
        type: REGISTER_USER,
        payload: data,
    }
}

export const loginUser = (loginData) => {
    const data = request("post", "api/rest-auth/login/", loginData);
    return {
        type: LOGIN_USER,
        payload: data,
    }
}

export const logoutUser = () => {
    const data = request("post", "api/rest-auth/logout/", null);
    return {
        type: LOGOUT_USER,
        payload: data,
    }
}
const initialState = {
    login: false,
    key: null,
    message: ""
}
export default function authenticated(state = initialState, action){
    switch(action.type){
        case REGISTER_USER:
            return {...state, key: action.payload.key, message:"회원가입 성공"}
        case LOGIN_USER:
            return {...state, login: true, key: action.payload.key, message:"로그인 성공"}
        case LOGOUT_USER:
            return {...state, login: false, key: null, message: action.payload.detail}
        default:
            return state;
    }
}