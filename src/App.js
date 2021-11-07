/*global chrome*/

import './App.css';
import React from 'react'
import { Whiteblack } from './whiteblack/whiteblack';
import {AllTasks} from "./taskStuff/allTasks"
import Container from './whiteBoard/Container';

var gamer;
/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    gamer = request.greeting;
    console.log("BEfore");
    console.log(gamer);
    console.log("AFTER");
    
    if (request.greeting !== "hello")


      sendResponse({farewell: "ff"});
  }
);
*/


export class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      which : "tasks"
    };
  }

  render(){
    let toDisplay;
    if(this.state.which == "tasks"){
      toDisplay = <AllTasks />;
    }
    else{
      toDisplay = <Whiteblack />;
    }

    return (
      <div className="App">
        <div className = "topBar">
          <button onClick={() => {this.setState({"which" : "tasks"})}}>tasks</button>
          <button onClick={() => {this.setState({"which" : "whiteBlack"})}}>whiteblack</button>
        </div>
        {gamer}

        {toDisplay}
      </div>

    );
  }
}
