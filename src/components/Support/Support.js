// imports
import React, { Component } from 'react';

import Input from "../Input/Input"

// class
class Support extends Component {
    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <Input 
                next="comments"
                feebackName="Support" />
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Support;