// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// class
class Input extends Component {

    state = {
        feedbackItem: []
    }

    submit = () => {
        console.log('saving feedback:', this.state.feedbackItem);
        // send current state to redux
        this.props.dispatch({ type: 'ADD_RESPONSE', payload: this.state.feedbackItem });
        // navigate to whichever component is next,
        // as determinded by App
        this.props.history.push(`/${[this.props.next]}`);
    }

    handleChange = (event, feedbackName) => {
        console.log(feedbackName, '=', event.target.value)
        this.setState({
            feedbackItem: {
                // can take any feedback and make it the state, 
                // ultimately adding it to the reducer object
                // feedback can easily grow with just a new component
                // no need to modify state or reducer
                [feedbackName]: event.target.value,
            }
        })
    }


    render() {
        return (
            <div>
                <label>{this.props.feebackName}?</label>
                {/* if feedback needs a text input, display it.
                        otherwise display a number input */}
                {(this.props.feedbackType === "text")
                    ? <textarea
                        onChange={(event) => this.handleChange(event, this.props.feebackName)} />
                    : <input
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChange(event, this.props.feebackName)} />
                }
                {/* submit input */}
                <button type="submit" onClick={this.submit}>Next</button>
            </div>
        ) // end return
    } // end render
} // end class

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

// export, need withRouter because component is called from many components, not App
export default withRouter(connect(putReduxStateOnProps)(Input));
