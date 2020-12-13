// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// class
class Input extends Component {
    
    // feedbackValue = this.props.feebackValue;

    state = {
        feedbackItem: {
            [this.props.feebackName]: '', 
        }
    }

    submit = () => {
        console.log('saving feedback:', this.state.feedbackItem);
        this.props.dispatch({ type: 'ADD_RESPONSE', payload: this.state.feedbackItem });
        this.props.history.push(`/${[this.props.next]}`);
    }

    handleChange = (event, inputType) => {
        console.log(inputType, '=', event.target.value)
        this.setState({
            feedbackItem:{
                [inputType]: event.target.value,
            }
        })
    }


    render() {
        return (
            <div>
                <p>props:</p>
                {JSON.stringify(this.props)}
                <p>state:</p>
                {JSON.stringify(this.state)}
                <form>
                    <label>Feeling?</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChange(event, this.props.feebackName)} />
                    <button type="submit" onClick={this.submit}>Next</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

// export
export default withRouter(connect(putReduxStateOnProps)(Input));
