// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// class
class Review extends Component {

    submit = () => {
        this.props.submitFeedback();
        this.props.history.push('/success');
    }

    render() {
        return (
            <div>
                <h2>Review Your Feedback</h2>
                {/* pull all submitted feedback from redux and display it on dom */}
                {Object.keys(this.props.reduxState.feedbackReducer).map((feedbackItem, i) => {
                    return (
                        <div key={i}>
                            {/* not sure how to use the value of feedbackItem to dig into the
                                feedbackReducer object, so I turned the values into an array
                                and used the index postion to grab the right one */}
                            <p>{feedbackItem} - {Object.values(this.props.reduxState.feedbackReducer)[i]}</p>
                        </div>
                    )
                })}
                <button onClick={this.submit} >Submit!</button>
            </div>
        ) // end return
    } // end render
} // end class

// need redux state
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

// export
export default withRouter(connect(putReduxStateOnProps)(Review));