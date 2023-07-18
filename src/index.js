import React from 'react';
import { Provider } from 'react-redux';
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

// export const StoreContext = createContext();

// console.log(StoreContext, " is the store context");

// class Provider extends React.Component {
//   render () {
//     const {store} = this.props;
//     return <StoreContext.Provider value={store}>
//       { this.props.children }
//     </StoreContext.Provider>
//   }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function(Component) {
//     class ConnectedComponent extends React.Component {
//       constructor (props) {
//         super(props);
//         const { store } = this.props;
//         this.unsubscribe = store.subscribe(()=>{
//           console.log("Updated state");
//           this.forceUpdate();
//         })
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (<Component {...dataToBePassedAsProps } dispatch = {store.dispatch}/>);
//       }
//     }

//     return class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return <StoreContext.Consumer>
//           { (store ) => <ConnectedComponent store={store} />}
//         </StoreContext.Consumer>
//       }
//     }
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App/>
  </Provider>
  
);

