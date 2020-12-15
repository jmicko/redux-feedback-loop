// imports
import React, { Component } from 'react';

import Input from "../Input/Input"

// class
class Comments extends Component {
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <Input 
                next="review"
                feebackName="Comments"
                // putting text changes the Input component to show a text input instead of number
                feedbackType="text" />
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Comments;