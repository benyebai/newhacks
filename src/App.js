/*global chrome*/

import './App.css';
import React from 'react'
import { Whiteblack } from './whiteblack/whiteblack';
import {AllTasks} from "./taskStuff/allTasks"
import Container from './whiteBoard/Container';

var gamer;

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



function App() {
  return (
    <div className="App">
      {gamer}
      <AllTasks />
      {/*<AllTasks />*/}
      <Whiteblack />
    </div>

  );
}

export default App;