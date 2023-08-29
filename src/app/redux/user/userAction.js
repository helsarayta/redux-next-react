'use client'
import axios, { Axios } from 'axios'
import {FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE} from './userTypes'

// function fetchDataUser() {
//     return (dispatch) => {
//         dispatch(fetchhUserRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
//             const user = response.data;
//             console.log("USER => ", user)
//             dispatch(fetchhUserSuccess(user))    
//         })
//         .catch(e => {
//             dispatch(fetchhUserFailure(e.message))
//         })
//     }
// }    

const fetchhUserRequest = () => {
    return {
        type:FETCH_USERS_REQUEST
    }
}

const fetchhUserSuccess = (users) => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchhUserFailure = (error) => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const fecthData = {
    fetchhUserRequest,
    fetchhUserSuccess,
    fetchhUserFailure
}

export default fecthData;

