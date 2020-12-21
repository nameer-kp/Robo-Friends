import { act } from 'react-dom/test-utils';
import {CHANGE_SEARCH_FIELD,ROBOT_REQUEST_FAILED,ROBOT_REQUEST_PENDING,ROBOT_REQUEST_SUCCESS} from './constants'

const initialState ={
    searchField:''
}

export const searchRobot = (state=initialState,action={})=>{

    switch(action.type){
        case CHANGE_SEARCH_FIELD :
            return  {...state,searchField:action.payload}
        default:
            return state; 
    }
}

const initialStateRobots ={
    isPending:false,
    robots:[],
    error:''
}

export const robotRequest =(state=initialStateRobots,action={})=>{

    switch(action.type){
        case ROBOT_REQUEST_FAILED:
            return {...state,isPending:false,error:action.payload}
        case ROBOT_REQUEST_SUCCESS:
            return {...state,robots:action.payload,isPending:false}
        case ROBOT_REQUEST_PENDING:
            return {...state,isPending:true}
        default:
            return state
    }
}