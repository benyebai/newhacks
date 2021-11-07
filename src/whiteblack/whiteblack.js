import React from 'react';

export class Whiteblack extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          white: [],
          black: []
      }
      this.onChangeUser = this.onChangeUser.bind(this)
      this.submit = this.submit.bind(this)
  }

  onChangeUser(event){
    this.setState({input: event.target.value})
    console.log(this.state)
  } 

  submit(event){
    event.preventDefault()
    this.setState({white: this.state.white.push(event)})


  } 


  render() {
      return(
        <div>
          
          <h1>white list</h1>
          <form onSubmit={this.submit}>
                  <label>
                      <input type="text" onChange={this.onChangeUser} placeholder="Username" className = "searchBar" />
                  </label>
          </form>
          <button onClick={this.submit} className = "submitButton"><h2>pog</h2></button>
          
          <p>{this.state.white}</p>
        </div>
      )
    }
  }