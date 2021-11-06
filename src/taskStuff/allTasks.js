import React from 'react';
import { FinishedTask } from './finishedTask';
import { Task } from './task';
import "./allTasks.css"
import { Button } from 'react-bootstrap';

export class AllTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all : ["make money", "touch grass", "get good sleep"],
            finished : ["mac and cheese make it"],
            settingsActive : false,
            whichActive : -1
        };
        this.addNewTask = this.addNewTask.bind(this);
    }

    addNewTask(){
        let newTasks = this.state.all;
        newTasks.push("New Task");
        this.setState({all:newTasks});
    }

    render(){
        let tasks = [];
        if(this.state.all != null){
            for(let i = 0; i < this.state.all.length; i++){
                tasks.push(
                    <Task 
                    taskName = {this.state.all[i]}
                    index = {i}
                    parent = {this}
                    key = {i}
                    finished = {false}
                    />
                );
            }
        }
        let finished = [];
        if(this.state.finished != null){
            for(let i = 0; i < this.state.finished.length; i++){
                finished.push(
                    <FinishedTask
                    taskName = {this.state.finished[i]}
                    index = {i + 10000}
                    parent = {this}
                    key = {i}
                    finished = {true}
                    />
                );
            }
        }

        return(
        <div className = "entire">
            <div className = "holder unfinished">
                <h1>Unfinished Tasks</h1>
                <div className = "actualTaskHolder">
                    {tasks}
                </div>
                <Button onClick = {this.addNewTask} className = "addTask">Add New Task</Button>
            </div>
            <div />
            <div className = "holder finished">
                <h1>Finished Tasks</h1>
                <div className = "actualTaskHolder">
                    {finished}
                </div>
            </div>
        </div>
        );
    }
}

