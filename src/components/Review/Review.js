// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class Review extends Component {
    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                {/* pull all submitted feedback from redux and display it on dom */}
                {this.props.reduxState.feedbackReducer.map((feedbackItem, i) => {
                    return(
                        // checking to make sure evertthing comes back right from dom
                        <p key={i}>{JSON.stringify(feedbackItem)}</p>
                        )
                })}
                {/* TODO - add button to submit all data to server via axios call passed in on props
                then redirect to success page */}
            </div>
        ) // end return
    } // end render
} // end class

// need redux state
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

// export
export default connect(putReduxStateOnProps)(Review);