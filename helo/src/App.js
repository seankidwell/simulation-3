import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import routes from './routes';
import {withRouter} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === '/' ? null : <Nav />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);