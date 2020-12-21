import {CHANGE_SEARCH_FIELD,ROBOT_REQUEST_FAILED,ROBOT_REQUEST_PENDING,ROBOT_REQUEST_SUCCESS} from './constants'
export const setSearchField =(text) =>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const robotRequest=()=>(dispatch)=>{
    dispatch({type:ROBOT_REQUEST_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
        return response.json();
    }).then(users=>{
       return dispatch({type:ROBOT_REQUEST_SUCCESS,payload:users})
    }).catch(err=>dispatch({type :ROBOT_REQUEST_FAILED}));
}