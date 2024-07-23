import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Recommendations from './components/Recommendations';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/recommendations" component={Recommendations} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

