import React from 'react';
import { WebsiteComponent } from './websitecomponent';
import './whiteblack.css'
export class Whiteblack extends React.Component {
  constructor(props) {
      super(props);
      this.state={
          white: [],
          black: []
      }
      this.onChangeUser = this.onChangeUser.bind(this)
      this.submit = this.submit.bind(this)
      this.submit2 = this.submit2.bind(this);
  }

  onChangeUser(event){
    this.setState({input: event.target.value})
    console.log(this.state)
  } 

  submit(e){
    e.preventDefault()
    let gay = this.state.white;
    gay.push(this.state.input);
    this.setState({white: gay});
  } 

  submit2(e){
    e.preventDefault()
    let gay1 = this.state.black;
    gay1.push(this.state.input);
    this.setState({black: gay1});
  } 


  render() {
      var whiteList = []
      for (let i = 0; i < this.state.white.length; i++) {
        whiteList.push(<WebsiteComponent string={this.state.white[i]} index={i} parent={this} color={'white'} />)
      }

      var blackList = []
      for (let i = 0; i < this.state.black.length; i++) {
        blackList.push(<WebsiteComponent string={this.state.black[i]} index={i} parent={this} color={'black'} />)
      }

      return(
        <div className='huge-container'>
          
          <div className='button-container'>
            <form onSubmit={this.submit}>
              <label>
                  <input type="text" onChange={this.onChangeUser} placeholder="website url" className = "searchBar" />
              </label>
              <button onClick={this.submit} className = "submitButton"><h2>white</h2></button>
              <button onClick={this.submit2} className = "submitButton"><h2>black</h2></button>
            </form>
          </div>
          
          <div className='website-container'>
            <div className='list-container'>
              <h1>white list (good urls)</h1>
              <div className='small-list-container'>
                <p>{whiteList}</p>
              </div>
            </div>

            <div className='list-container'>
              <h1>black list (bad urls)</h1>
              <div className='small-list-container'>
                <p>{blackList}</p>
              </div>
            </div>
          </div>
          
        </div>
      )
    }
  }