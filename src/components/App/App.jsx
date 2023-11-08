import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import ListName from '../ListName/ListName.jsx';

// import your useSelector, useDispatch
// useSelector pulls information out of redux store
// useDispatch sends information to the redux store
import { useSelector, useDispatch } from 'react-redux';


import './App.css';

function App() {

  // connect your local variable to reducer
  const count = useSelector(store => store.count);
  // then implement it into your DOM

  // variable
    const listName = useSelector(store => store.listName)


  // dispatch used to send to redux
  // use dispatch requires a variable (like useHistory)
  const dispatch = useDispatch();


  // create a function to increase the count
    const increaseCount = () => {
      // send data to redux using dispatch
      const action = { type: 'INCREASE' };
      dispatch(action);
    }

  // create a function to decrease the count
    const decreaseCount = () => {
      const action = { type: 'DECREASE' };
      dispatch(action);
    }

  // create a function to reset the count
    const resetCount = () => {
      const action = { type: 'RESET' };
      dispatch(action)
    }

  // TODO - GET Book List from server

  return (
    <div className="App">
      <header><h1>{listName}</h1></header>

      <div>Count: {count}</div>

      <h4>Name Your Book List</h4>
      <ListName />

      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>

      <main>
        <BookForm />
        <BookList />
      </main>

    </div>
  );
}

export default App;
