const intialState = {
    username: '',
    profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT_USER = 'LOGOUT_USER'


export function updateUser(username, profilePic){
    return {
        type: UPDATE_USER,
        payload: username, profilePic
    }
}



export function logoutUser(){
    return {
        type: LOGOUT_USER,
    }
}






export default function reducer(state = intialState, action){
    switch (action.type){
        case UPDATE_USER:
            return {...state, username: action.payload.username, profilePic: action.payload.profilePic}
        case LOGOUT_USER:
            return intialState
        default: 
            return state
    }
}