import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import './foundation.min.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(
    rootReducer,
);

ReactDOM.render(
    <Provider store={ store }>
      <Routes />
    </Provider>,
    document.getElementById('root')
);
  
registerServiceWorker();
