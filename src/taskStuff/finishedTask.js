import React from 'react';
import "./task.css"

export class FinishedTask extends React.Component{
    constructor(props){
        super(props);

        this.parent = this.props.parent;

        this.changeName = this.changeName.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.saveName = this.saveName.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.unFinishTask = this.unFinishTask.bind(this);

        this.wrapperRef = React.createRef();

        this.state = {
            currentName : this.props.taskName
        };
    }

    changeSettings(){
        if(!this.parent.state.settingsActive){
            this.parent.setState({
                settingsActive : true,
                whichActive : this.props.index
            });
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    changeName(e){
        this.setState({currentName:e.target.value});
    }

    saveName(){
        var changed = this.props.parent.state.finished;
        changed[this.props.index - 10000] = this.state.currentName;
        this.props.parent.setState({
            finished : changed,
            settingsActive : false
        });
    }

    deleteTask(){
        let newTasks = this.props.parent.state.finished;
        newTasks.splice(this.props.index - 10000, 1);
        this.props.parent.setState({finished:newTasks, settingsActive : false});
    }

    handleClickOutside(event) {       
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            //clicked outside
            if(this.props.parent.state.settingsActive && this.props.parent.state.whichActive == this.props.index){
                console.log(this.props.taskName)
                this.props.parent.setState({
                    settingsActive : false,
                });
            }
        }
        else{
            //clicked inside
            if(!this.props.parent.state.settingsActive){
                this.changeSettings()
                this.setState({
                    currentName : this.props.taskName
                });
            }
        }
    }

    unFinishTask(){
        let newTasks = this.props.parent.state.finished;
        let toAdd = newTasks[this.props.index - 10000];
        newTasks.splice(this.props.index - 10000, 1);

        let finishedNew = this.props.parent.state.all;
        finishedNew.push(toAdd);

        this.props.parent.setState({all:finishedNew, settingsActive : false, finished:newTasks});
    }

    render(){

        if(this.parent.state.settingsActive && this.parent.state.whichActive == this.props.index){
            return(
                <div className = "entireTaskBar" ref = {this.wrapperRef}>

                    <div className = "barContainer">
                        <form onSubmit={this.saveName} >
                            <label>
                                <input 
                                value = {this.state.currentName}
                                type="text" 
                                onChange={this.changeName} 
                                placeholder="New Name"
                                className = "bar"
                                />
                            </label>
                        </form>
                        <button onClick = {this.saveName} className = "saveNameButton">save name</button>
                    </div>
                    <div className = "sideButtons">
                        <div>
                            <button onClick = {this.unFinishTask} className = "submitButton">
                                finish task
                            </button>
                        </div>

                        <div>
                            <button onClick = {this.deleteTask} className = "submitButton">
                                delete task
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
            <div className = "hypercool" ref = {this.wrapperRef}>
                <h2 className = "smaller">{this.props.taskName}</h2>
            </div>
            );
        }
    }
}

