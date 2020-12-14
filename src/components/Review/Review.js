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
                    return (
                        <div key={i}>
                            {/* checking to make sure evertthing comes back right from dom */}
                            <p>{Object.keys(feedbackItem)} - {Object.values(feedbackItem)}</p>
                        </div>
                    )
                })}
                {/* TODO - add button to submit all data to server via axios call passed in on props
                then redirect to success page */}
                <button >Submit!</button>
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