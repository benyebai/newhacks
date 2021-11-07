import React from 'react';
import './websitecomponent.css';

export class WebsiteComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.click = this.click.bind(this);
    }
    
    click() {
        if (this.props.color === 'white') {
            let newInfo = this.props.parent.state.white;
            newInfo.splice(this.props.index, 1);
            this.props.parent.setState({white: newInfo});
        } else {
            let newInfo = this.props.parent.state.black;
            newInfo.splice(this.props.index, 1);
            this.props.parent.setState({black: newInfo});
        }
    }

    render() {
        return (
            <div className='website-component'>
                <div className='website-text'>
                    <p>{this.props.string}</p>
                </div>

                <button className='trash-button' onClick={this.click}><img className='trashbin' src="trashbin.png" alt="Logo" /></button>
            </div>
        )
    }
}