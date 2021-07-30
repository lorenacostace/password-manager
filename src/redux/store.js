import { createStore, combineReducers } from 'redux';
import { passwordReducer as passwords } from "./passwords";


const initialState = {
    passwords: {
        passwordOne: '',
        passwordTwo: '',
        hintPassword: '',
        enableButton: true,
        status:'PENDING'
    },
};

const reducers = combineReducers({
    passwords
})

const store = createStore(reducers, initialState);

export default store;