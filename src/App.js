/*global chrome*/

import './App.css';
import React from 'react'
import { Whiteblack } from './whiteblack/whiteblack';
import {AllTasks} from "./taskStuff/allTasks"
import Container from './whiteBoard/Container';


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
  )
  }}

