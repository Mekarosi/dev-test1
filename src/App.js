import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import GigList from './components/GigList';
import NewGig from './components/NewGig';
import GigSalary from './components/GigSalary';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <SideBar />

          <Switch>
            <Route exact path='/' component={GigList} />
            <Route exact path='/new' component={NewGig} />
            <Route exact path='/salary' component={GigSalary} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
