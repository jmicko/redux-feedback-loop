// imports
import React, { Component } from 'react';

// class
class Feeling extends Component {
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <form>
                    <label>Feeling?</label>
                    <input type="number" min="1" max="5" />
                    <button type="submit">Next</button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Feeling;