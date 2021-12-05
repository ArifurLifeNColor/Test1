import './App.css';
import { createStore, applyMiddleware } from 'redux';

import CheckFormatter from './Components/checkFormatter/CheckFormatter';
import createSagaMiddleware from 'redux-saga';
//importing saga
import { HelloSaga} from './Components/Saga/Saga';
import { useReducer } from 'react';
//creating middleware
const sagaMiddleware = createSagaMiddleware();
const reducer = useReducer();
//connecting middleware
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
//running the saga
// sagaMiddleware.run(helloSaga)
function App() {
  return (
    <div className="App">
      <h1>Color & Life</h1>
      {/* <HelloSaga></HelloSaga> */}
      <CheckFormatter></CheckFormatter>
    </div>
  );
}

export default App;
