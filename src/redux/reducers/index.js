//imported action states
import {
    LOGIN_START,
    LOGIN_SUCCESS_DINER,
    LOGIN_SUCCESS_OPERATOR,
    LOGIN_FAIL,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGN_OUT,
    REQUEST_START,
    REQUEST_SUCCESS,
    REQUEST_FAIL,
    GET_FAVORITES_START,
    GET_FAVORITES_SUCCESS,
    GET_FAVORITES_FAIL,    
    ADD_FAVORITES_START,
    ADD_FAVORITES_SUCCESS,
    ADD_FAVORITES_FAIL,
    ADD_FAVORITES_DONE,
    ADD_RATING_START,
    ADD_RATING_SUCCESS,
    ADD_RATING_FAIL,
    ADD_RATING_DONE,
    DELETE_FAVORITES_FAIL,
    DELETE_FAVORITES_START,
    DELETE_FAVORITES_SUCCESS,
    DELETE_FAVORITES_DONE,
    ADDTRUCK_START,
    ADDTRUCK_SUCCESS,
    ADDTRUCK_FAIL,
    DELETE_TRUCK_START,
    DELETE_TRUCK_SUCCESS,
    DELETE_TRUCK_FAIL,
    DELETE_TRUCK_DONE,
    ADD_MENU_ITEM_START,
    ADD_MENU_ITEM_SUCCESS,
    ADD_MENU_ITEM_FAIL,
    ADD_MENU_ITEM_DONE,
    UPDATE_TRUCK_START,
    UPDATE_TRUCK_SUCCESS,
    UPDATE_TRUCK_FAIL,
    UPDATE_TRUCK_DONE,
} from '../actions'


const initialState = {
    isLoggedIn: false,
    isLoading: false,
    addSuccess: false,
    role: '',
    username: '',
    dinerId: '',
    operatorId: '',
    error: '',
    data: [],
    favorites: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS_DINER:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                role: action.payload.type,
                dinerId: action.payload.diner.dinerId,
                username: action.payload.diner.username,
                error: ''
            }
        case LOGIN_SUCCESS_OPERATOR:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                role: action.payload.type,
                operatorId: action.payload.operator.operatorId,
                username: action.payload.operator.username,
                error: ''
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                username: '',
                error: action.payload
            }
        case SIGNUP_START:
            return {
                ...state,
                isLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ''
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                error: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case REQUEST_START:
            return {
                ...state,
                isLoading: true
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                data: action.payload
            }
        case REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_FAVORITES_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_FAVORITES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                favorites: action.payload
            }
        case GET_FAVORITES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_FAVORITES_START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_FAVORITES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: '',
            }
        case ADD_FAVORITES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_FAVORITES_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: '',
            }
        case ADD_RATING_START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_RATING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: '',
            }
        case ADD_RATING_FAIL:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: action.payload
            }
        case ADD_RATING_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: '',
            }
        case DELETE_FAVORITES_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_FAVORITES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: '',
            }
        case DELETE_FAVORITES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_FAVORITES_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: '',
            }
        case ADDTRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case ADDTRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case ADDTRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: action.payload
            }
        case DELETE_TRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_TRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case DELETE_TRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_TRUCK_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: '',
            }
        case ADD_MENU_ITEM_START:
            return {
                ...state,
                isLoading: true
            }
        case ADD_MENU_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case ADD_MENU_ITEM_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_MENU_ITEM_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: '',
            }
        case UPDATE_TRUCK_START:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_TRUCK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addSuccess: true,
                error: ''
            }
        case UPDATE_TRUCK_DONE:
            return {
                ...state,
                isLoading: false,
                addSuccess: false,
                error: ''
            }
        case UPDATE_TRUCK_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

