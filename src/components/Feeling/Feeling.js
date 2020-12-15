// imports
import React, { Component } from 'react';
import Input from "../Input/Input"


// class
class Feeling extends Component {

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                    <Input 
                    // each component that calls Input needs to tell it where 
                    // to go "next" 
                    next="understanding"
                    // using capital letters here does break convention because they end up
                    // being variable names, but they show up nicer on the DOM
                    // TODO - change to capital before displaying on DOM
                    feebackName="Feeling" />
            </div>
        ) // end return
    } // end render
} // end class

export default Feeling;