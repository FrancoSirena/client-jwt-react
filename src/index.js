import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import SignUp from './components/auth/SignUp';
import Logout from './components/auth/Logout';
import Feature from './components/Feature';
import Login from './components/auth/Login';
import Home from './components/Home';

const store = createStore(
  reducers, 
  {auth: { authenticated: localStorage.getItem('token')}},
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/my-area" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)