// imports
import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

// Make Component nao plz
class App extends Component {
    constructor(){
        super();
        this.state = {
            endpoint: "http://localhost:1463",
            color: ''
        }
    }

    get socket() {
        return socketIOClient(this.state.endpoint);
    }

    send = (color) => {
        this.socket.emit('change color', color);
    }
    //render method
  render() {
    // const socket = socketIOClient(this.state.endpoint);

    this.socket.on('change color', (color) => {
        document.body.style.backgroundColor = color;
    })

    return (
      <div style={{textAlign: "center"}}>
          <button onClick={() => this.send('red')}>Change Color</button>
          <button onClick={() => this.send('blue')}>Color Blue stuff </button>
      </div>
    );
  }
}

export default App;
