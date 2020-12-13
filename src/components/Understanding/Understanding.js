// imports
import React, { Component } from 'react';

// class
class Understanding extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
                <h2>hello from Understanding component</h2>
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Understanding;