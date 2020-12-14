// imports
import React, { Component } from 'react';

import Input from "../Input/Input"

// class
class Comments extends Component {
    render() {
        return (
            <div>
                {/* <p>props:</p>
                {JSON.stringify(this.props)}
                <p>state:</p>
                {JSON.stringify(this.state)} */}
                <h2>Any comments you want to leave?</h2>
                <Input 
                next="review"
                feebackName="Comments"
                feedbackType="text" />
            </div>
        ) // end return
    } // end render
} // end class

// export
export default Comments;