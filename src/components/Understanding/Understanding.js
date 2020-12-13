// imports
import React, { Component } from 'react';

import Input from "../Input/Input"

// class
class Understanding extends Component {
    render() {
        return (
            <div>
                <p>props:</p>
                {JSON.stringify(this.props)}
                <p>state:</p>
                {JSON.stringify(this.state)}
                <h2>hello from Understanding component</h2>
                <Input 
                next="understanding"
                feebackName="understanding" />
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Understanding;