import React from 'react';
import { Task } from './task';

export class AllTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all : ["hheeeeee", "asd"]
        };
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
                    />
                );
            }
        }

        return(
        <div className = "entire">
            <div className = "holder">
                {tasks}
            </div>
        </div>
        );
    }
}

