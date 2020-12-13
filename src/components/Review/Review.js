// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

// class
class Review extends Component {
    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                {this.props.reduxState.feedbackReducer.map((feedbackItem, i) => {
                    return(
                        // checking to make sure evertthing comes back right from dom
                        <p key={i}>{JSON.stringify(feedbackItem)}</p>
                        )
                })}
            </div>
        ) // end return
    } // end render
} // end class

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

// export
export default connect(putReduxStateOnProps)(Review);