import React from 'react';
import "./task.css";

export class Task extends React.Component{
    constructor(props){
        super(props);

        this.parent = this.props.parent;

        this.changeName = this.changeName.bind(this);
        this.changeSettings = this.changeSettings.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.saveName = this.saveName.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.finishTask = this.finishTask.bind(this);

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
        console.log(this.state.currentName)
        var changed = this.props.parent.state.all;
        changed[this.props.index] = this.state.currentName;
        this.props.parent.setState({
            all : changed,
            settingsActive : false
        });
    }

    deleteTask(){
        let newTasks = this.props.parent.state.all;
        newTasks.splice(this.props.index, 1);
        this.props.parent.setState({all:newTasks, settingsActive : false});
    }

    handleClickOutside(event) {       
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            //clicked outside
            if(this.props.parent.state.whichActive == this.props.index){
                this.props.parent.setState({
                    settingsActive : false,
                });
            }
        }
        else{
            if(!this.props.parent.state.settingsActive){
                //clicked inside
                this.changeSettings()
                this.setState({
                    currentName : this.props.taskName
                });
            }
        }
    }

    finishTask(){
        console.log("asd")
        let newTasks = this.props.parent.state.all;
        let toAdd = newTasks[this.props.index];
        newTasks.splice(this.props.index, 1);

        let finishedNew = this.props.parent.state.finished;
        finishedNew.push(toAdd);

        this.props.parent.setState({all:newTasks, settingsActive : false, finished:finishedNew});
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
                            <button onClick = {this.finishTask} className = "submitButton">
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
                <h2 className='smaller'>{this.props.taskName}</h2>
            </div>
            );
        }
    }
}

