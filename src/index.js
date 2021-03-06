//Entry point
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk));

//App.js  ---> indext.html root
//Provider is a React component given to us by the “react-redux” library. It serves just ///one purpose : to “provide” the store to its child components.
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root')
);