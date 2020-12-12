import axios from 'axios';
import axiosWithAuth from '../../axios/axiosWithAuth';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS_DINER = 'LOGIN_SUCCESS_DINER';
export const LOGIN_SUCCESS_OPERATOR = 'LOGIN_SUCCESS_OPERATOR';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const GET_FAVORITES_START = 'GET_FAVORITES_START';
export const GET_FAVORITES_SUCCESS = 'GET_FAVORITES_SUCCESS';
export const GET_FAVORITES_FAIL = 'GET_FAVORITES_FAIL';
export const ADD_FAVORITES_START = 'ADD_FAVORITES_START';
export const ADD_FAVORITES_SUCCESS = 'ADD_FAVORITES_SUCCESS';
export const ADD_FAVORITES_FAIL = 'ADD_FAVORITES_FAIL';
export const ADD_FAVORITES_DONE = 'ADD_FAVORITES_DONE';
export const ADD_RATING_START = 'ADD_RATING_START';
export const ADD_RATING_SUCCESS = 'ADD_RATING_SUCCESS';
export const ADD_RATING_FAIL = 'ADD_RATING_FAIL';
export const ADD_RATING_DONE = 'ADD_RATING_DONE';
export const DELETE_FAVORITES_START = 'DELETE_FAVORITES_START';
export const DELETE_FAVORITES_SUCCESS = 'DELETE_FAVORITES_SUCCESS';
export const DELETE_FAVORITES_FAIL = 'DELETE_FAVORITES_FAIL';
export const DELETE_FAVORITES_DONE = 'DELETE_FAVORITES_DONE';
export const ADDTRUCK_START = 'ADDTRUCK_START';
export const ADDTRUCK_SUCCESS = 'ADDTRUCK_SUCCESS';
export const ADDTRUCK_FAIL = 'ADDTRUCK_FAIL';
export const DELETE_TRUCK_START = 'DELETE_TRUCK_START';
export const DELETE_TRUCK_SUCCESS = 'DELETE_TRUCK_SUCCESS';
export const DELETE_TRUCK_FAIL = 'DELETE_TRUCK_FAIL';
export const DELETE_TRUCK_DONE = 'DELETE_TRUCK_DONE';
export const ADD_MENU_ITEM_START = 'ADD_MENU_ITEM_START';
export const ADD_MENU_ITEM_SUCCESS = 'ADD_MENU_ITEM_SUCCESS';
export const ADD_MENU_ITEM_FAIL = 'ADD_MENU_ITEM_FAIL';
export const ADD_MENU_ITEM_DONE = 'ADD_MENU_ITEM_DONE';
export const UPDATE_TRUCK_START = 'UPDATE_TRUCK_START';
export const UPDATE_TRUCK_SUCCESS = 'UPDATE_TRUCK_SUCCESS';
export const UPDATE_TRUCK_DONE = 'UPDATE_TRUCK_DONE';
export const UPDATE_TRUCK_FAIL = 'UPDATE_TRUCK_FAIL';
export const SIGN_OUT = 'SIGN_OUT';

//Log in action
export const logIn = (signInInfo) => dispatch => {
    dispatch({ type: LOGIN_START });
    axios.post('https://food-truck-trackr-api.herokuapp.com/api/auth/login', signInInfo)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            if (res.data.type === 'diner') {
                dispatch({ type: LOGIN_SUCCESS_DINER, payload: res.data }); 
            } else {
                dispatch({ type: LOGIN_SUCCESS_OPERATOR, payload: res.data });   
            }
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err });
        });
};

//Sign up action
export const signUpDiner = (dinerObj) => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios.post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/diner', dinerObj) 
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};

//Sign up action
export const signUpOperator = (operatorObj) => dispatch => {
    dispatch({ type: SIGNUP_START });
    axios.post('https://food-truck-trackr-api.herokuapp.com/api/auth/register/operator', operatorObj)
        .then(res => {
            console.log(res);
            dispatch({ type: SIGNUP_SUCCESS, payload: res });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAIL, payload: err });
        });
};


//Get Truck Info action
export const getTruckInfo = () => dispatch => {
    dispatch({ type: REQUEST_START });

    axiosWithAuth().get('https://food-truck-trackr-api.herokuapp.com/api/trucks')
        .then(res => {
            console.log(res);
            dispatch({ type: REQUEST_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REQUEST_FAIL, payload: err });
        });
};

//Get Favorites Info action
export const getFavorites = (dinerId) => dispatch => {
    dispatch({ type: GET_FAVORITES_START });

    axiosWithAuth().get(`https://food-truck-trackr-api.herokuapp.com/api/diners/${dinerId}/favoriteTrucks`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_FAVORITES_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: GET_FAVORITES_FAIL, payload: err });
        });
};


//Add Favorites action
export const addFavorites = (dinerId, truckId) => dispatch => {
    dispatch({ type: ADD_FAVORITES_START });

    axiosWithAuth().post(`https://food-truck-trackr-api.herokuapp.com/api/diners/${dinerId}/favoriteTrucks`, truckId)
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_FAVORITES_SUCCESS, payload: res.data });
            dispatch({ type: ADD_FAVORITES_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_FAVORITES_FAIL, payload: err });
        });
};


//Submit Rating action
export const submitRating = (truckId, dinerId, customerRatingObj) => dispatch => {
    dispatch({ type: ADD_RATING_START });

    axiosWithAuth().post(`https://food-truck-trackr-api.herokuapp.com/api/trucks/${truckId}/customerRatings/${dinerId}`, customerRatingObj)
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_RATING_SUCCESS, payload: res.data });
            dispatch({ type: ADD_RATING_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_RATING_FAIL, payload: err });
        });
};


//Delete Favorite action
export const deleteFavorites = (dinerId, truckIdObj) => dispatch => {
    dispatch({ type: DELETE_FAVORITES_START });
    console.log(truckIdObj)
    axiosWithAuth().delete(`https://food-truck-trackr-api.herokuapp.com/api/diners/${dinerId}/favoriteTrucks`, truckIdObj)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_FAVORITES_SUCCESS, payload: res.data });
            dispatch({ type: DELETE_FAVORITES_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_FAVORITES_FAIL, payload: err });
        });
};





//Add Truck  action
export const addTruck = (truckObj) => dispatch => {
    dispatch({ type: ADDTRUCK_START });

    axiosWithAuth().post('https://food-truck-trackr-api.herokuapp.com/api/trucks', truckObj)
        .then(res => {
            console.log(res);
            dispatch({ type: ADDTRUCK_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADDTRUCK_FAIL, payload: err });
        });
};


//Delete Truck  action
export const deleteTruck = (truckId) => dispatch => {
    dispatch({ type: DELETE_TRUCK_START });

    axiosWithAuth().delete(`https://food-truck-trackr-api.herokuapp.com/api/trucks/${truckId}`)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_TRUCK_SUCCESS, payload: res.data });
            dispatch({ type: DELETE_TRUCK_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_TRUCK_FAIL, payload: err });
        });
};

//Add Menu Item
export const addMenuItem = (truckId, menuObj) => dispatch => {
    dispatch({ type: ADD_MENU_ITEM_START });

    axiosWithAuth().post(`https://food-truck-trackr-api.herokuapp.com/api/trucks/${truckId}/menu`, menuObj)
        .then(res => {
            console.log(res);
            dispatch({ type: ADD_MENU_ITEM_SUCCESS, payload: res.data });
            dispatch({ type: ADD_MENU_ITEM_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_MENU_ITEM_FAIL, payload: err });
        });
};


//Update Truck  action
export const updateTruck = (truckId, truckobj) => dispatch => {
    dispatch({ type: UPDATE_TRUCK_START });

    axiosWithAuth().put(`https://food-truck-trackr-api.herokuapp.com/api/trucks/${truckId}`, truckobj)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_TRUCK_SUCCESS, payload: res.data });
            dispatch({ type: UPDATE_TRUCK_DONE });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: UPDATE_TRUCK_FAIL, payload: err });
        });
};


//Sign Out
export const signOut = () => dispatch  => {
    localStorage.clear();
    dispatch({ type: SIGN_OUT });
}