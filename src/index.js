import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//feedback reducer
const feedbackReducer = (state=[], action) => {
    if (action.type === 'ADD_RESPONSE'){
        console.log(action.payload);
        // honestly not sure if I need to expand state here, but I don't want to test it
        // need to expand whateever comes in as action.payload because 
        // okay look idk what's going on here but it works. It allowed me to put any 
        // key value pair into the feedbackItem object in state, so I can just make 
        // new components without worrying about that
        return {...state, ...action.payload};
    }
    return state;
}

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
