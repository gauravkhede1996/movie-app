import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import movies from './reducers/index';

const store= createStore(movies);
// console.log("store ",store);
// console.log("State in store",store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}],
// });
// console.log("After State",store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

