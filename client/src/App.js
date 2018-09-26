import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { 
    passwords: []
  };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }


  // Get the passwords and store them in state
  getPasswords = () => {
    fetch('/api')
      .then(response => {
        return response.json()
       })
      .then( (passwords) => {
        this.setState({ passwords })
        console.log(passwords)
      });
     
  }

  render() {
    // const { passwords } = this.state;
    return (
      <div> 
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
            {this.state.passwords.map(element => element.answer)}
      </div>    

    );
  }
}

export default App;
