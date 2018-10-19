import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      picture: "",
      friends: []

    }
  }

  handlePictureChange(event) {
    let picture = event.target.value
    this.setState({
      picture
    })
  }

  handleNameChange(event) {
    let name = event.target.value
    this.setState({
      name
    })
  }

  handleClick() {
    let {name, picture} = this.state
    let friend = {
      name,
      picture
    }

    let friends = this.state.friends;
    friends.push(friend)

    this.setState({
      friends
    })
  }

  render() {
    return (
      <div>
        <label>Picture:</label>
        <input type="text" onChange={event => this.handlePictureChange(event)}/>
        <label>Name:</label>
        <input type="text" onChange={event => this.handleNameChange(event)}/>
        <button onClick={() => this.handleClick()}>Add Friend</button>
        {this.state.friends.map((friend, i) => {
          return (
            <div key={i}>
              <div>{friend.name}</div>
              <img src={friend.picture} alt=""/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
