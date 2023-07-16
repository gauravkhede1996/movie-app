import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'
import movies from './reducers/index';

const logger = function ({dipatch, getState}) {
  return function (next) {
    return function (action) {
      console.log(action.type," ACTION_TYPE");
      next (action)
    }
  }
}
const store= createStore(movies,applyMiddleware(logger,thunk));
// console.log("store ",store);
// console.log("State in store",store.getState());
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}],
// });
// console.log("After State",store.getState());

export const StoreContext = createContext();

console.log(StoreContext, " is the store context");

class Provider extends React.Component {
  render () {
    const {store} = this.props;
    return <StoreContext.Provider value={store}>
      { this.props.children }
    </StoreContext.Provider>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App/>
  </Provider>
  
);

