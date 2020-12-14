// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import Input from "../Input/Input"


// class
class Feeling extends Component {

    state = {
        feeling: ''
    }

    render() {
        return (
            <div>
                {/* <p>props:</p>
                {JSON.stringify(this.props)}
                <p>state:</p>
                {JSON.stringify(this.state)} */}
                <h2>How are you feeling today?</h2>
                    <Input 
                    next="understanding"
                    feebackName="Feeling" />
            </div>
        ) // end return
    } // end render
} // end class

//export
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default withRouter(connect(putReduxStateOnProps)(Feeling));