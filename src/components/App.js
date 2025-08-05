import React, {Component, useState} from "react";
import '../styles/App.css';
import Flames from "./Flames";

class App extends Component {
    render() {

        return(
            <div id="main">
               <Flames />
            </div>
        )
    }
}


export default App;
