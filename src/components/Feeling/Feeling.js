// imports
import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                <h2>How are you feeling today?</h2>
                <form>
                    <label>Feeling?</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        onChange={(event) => this.handleChange(event, 'feeling')} />
                    <button type="submit">Next</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Feeling;