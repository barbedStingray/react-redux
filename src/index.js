import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
// end step 1


import App from './components/App/App';
import './index.css';










// Create a Reducer ( a variable) to store a counter (and share across components)
// Previous Code : const [count, setCount] = useState(0);
// ** name    value = initial value      action
const count = (state = 0, action) => {
  if(action.type === 'INCREASE') {
    return state + 1; // ! not state += 1 
  }
  else if(action.type === 'DECREASE') {
    return state - 1;
  }
  else if(action.type === 'RESET') {
    return 0; // when we return, we set count to what we want
  }
  // returning state means the reducer is unchanged
  return state;
}
// then put it in your list of reducers









// create a new reducer (all will have an initial value and action)
const listName = (state = 'test 123', action) => {
  if(action.type === 'SET_LIST_NAME') {
    // pass our new list name via action.payload
    return action.payload;
  }
  
  // ! Reducers must always return state by default
  // ! if not, it will return undefined during initialization
  return state;
}
// then add it to your store







// Reducer - more on this later
const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  return state;
}





// Step 2: Create your Store
const reduxStore = createStore(
  combineReducers({
    // ** This is the only part you will need to change
    bookList,
    count,
    listName
  }),
  applyMiddleware(logger)
);
// End Step 2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap your app in a Provider */}
    {/* Only components within the provider have access to the store */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
