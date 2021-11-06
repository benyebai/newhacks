import React from 'react';

export class Task extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className = "entire">
            <h1>{this.props.taskName}</h1>
        </div>
        );
    }
}

