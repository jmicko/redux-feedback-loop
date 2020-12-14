import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Feeling from "../Feeling/Feeling"
import Understanding from "../Understanding/Understanding"
import Support from "../Support/Support"
import Comments from "../Comments/Comments"
import Review from "../Review/Review"

import './App.css';

class App extends Component {

  submitFeedback = () => {
    console.log('In function submit');
    // feedback object can be taken directly from redux
    axios.post('/feedback', this.props.reduxState.feedbackReducer)
    .then((response) => {
        console.log('back from POST', response.data);
    }).catch((error) => {
        console.log('error with POST', error)
        alert('Something wrong with the POST')
    })
    // this.props.dispatch( { type: 'END_FEEDBACK' } );
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route exact path="/" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" >
            <Review submitFeedback={this.submitFeedback}/>
          </Route>
        </Router>
      </div>
    );
  }
}

// need redux state
const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

// export
export default connect(putReduxStateOnProps)(App);
