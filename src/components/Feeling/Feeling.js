// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';


// class
class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleChange = (event, inputType) => {
        console.log(inputType, '=', event.target.value)
        this.setState({
            [inputType]: event.target.value,
        })
    }

    submit = () => {
        console.log('saving feeling:', this.state.feeling);
        this.props.dispatch({ type: 'ADD_RESPONSE', payload: this.state.feeling });
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
                <h2>How are you feeling today?</h2>
                <form>
                    <label>Feeling?</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChange(event, 'feeling')} />
                    <button type="submit" onClick={this.submit}>Next</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

//export
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);