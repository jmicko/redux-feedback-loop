import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feeling from "../Feeling/Feeling"
import Understanding from "../Understanding/Understanding"
import Support from "../Support/Support"
import Comments from "../Comments/Comments"
import Review from "../Review/Review"

import './App.css';

class App extends Component {

  // TODO - add axios call to send data to server, 
  // send it as props to Review component

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* just need Router, no nav so no links */}
        <Router>
          <Route exact path="/" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          {/* TODO - add success component */}
        </Router>
      </div>
    );
  }
}

export default App;
