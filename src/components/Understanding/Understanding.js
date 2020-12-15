// imports
import React, { Component } from 'react';

import Input from "../Input/Input"

// class
class Understanding extends Component {
    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <Input 
                next="support"
                feebackName="Understanding" />
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Understanding;