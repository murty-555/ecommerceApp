import axios from "axios";
import { actionTypes } from "./actionTypes/loginActionTypes";
const BASE_URL="https://fakestoreapi.com/";
const loginUser=(username,password)=>{
    return (dispatch)=>{
        dispatch({
            type:actionTypes.IS_LOADING
        })
        return axios
        .post(BASE_URL+"auth/login",{username,password})
        .then((response)=>{
            if(response.data.token){
                localStorage.setItem("user",JSON.stringify(response.data))
                dispatch({
                    type:actionTypes.LOGIN_SUCCESSS,
                    payload:username,
                })
            }else{
                dispatch({
                    type:actionTypes.LOGIN_FAILURE,
                    payload:"User not found"
                })
            };

        })

    }

}
export default loginUser;
