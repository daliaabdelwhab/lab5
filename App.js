import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;