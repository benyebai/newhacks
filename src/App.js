/*global chrome*/

import './App.css';
import React from 'react'
import { Whiteblack } from './whiteblack/whiteblack';
import {AllTasks} from "./taskStuff/allTasks"
import Container from './whiteBoard/Container';

<<<<<<< HEAD

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      which: 'tasks'
    }
  }
  
  render() {
    var currentPage = <AllTasks />

    if (this.state.which === "whiteblack") {
      currentPage = <Whiteblack />
    } else if (this.state.which === "draw") {
      currentPage = <Container />
    } else {
      currentPage = <AllTasks />
    }

  return (
    <div className="App">

      <nav className="navbar">
        <ul>
          <li><a onClick={() => {this.setState({"which" : "tasks"})}}>tasks</a></li>
          <li><a onClick={() => {this.setState({"which" : "whiteblack"})}}>whiteblack</a></li>
          <li><a onClick={() => {this.setState({"which" : "draw"})}}>draw</a></li>
        </ul>
      </nav>

      {currentPage}

      
    </div>
=======
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

>>>>>>> c2f07fe5b5bd803f900e4434791073c4e272a66a
    );
  }
}
