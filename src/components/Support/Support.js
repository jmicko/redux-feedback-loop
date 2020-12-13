// imports
import React, { Component } from 'react';

import Input from "../Input/Input"

// class
class Support extends Component {
    render() {
        return (
            <div>
                <p>props:</p>
                {JSON.stringify(this.props)}
                <p>state:</p>
                {JSON.stringify(this.state)}
                <h2>How well are you being supported?</h2>
                <Input 
                next="comments"
                feebackName="support" />
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Support;