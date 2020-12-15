// imports
import React, { Component } from 'react';

// class
class Success extends Component {

    done = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Thank You!</h2>
                <button onClick={this.done} >Leave New Feedback</button>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Success;