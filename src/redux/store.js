import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './reducers/auth-reducer';
const middleware = [];

const rootReducer = combineReducers({
  auth: authReducer
});

const store = configureStore({
    reducer: {
        rootReducer
    },
    middleware
});

export default store;