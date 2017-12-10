import React from 'react';
import { Component } from 'react';
import Board from './Board/Board';
import ScoreBoard from './ScoreBoard/ScoreBoard';


const style = {
  container: {
    height: 'auto',
    width: '100%',
    margin: 'auto',
  },
  text: {
    color: '#cecece',
    textAlign: 'center',
    paddingTop: '1em'
  }
}

class App extends Component {

  render(){
    return(
      <div style={style.container}>
        <h1 style={style.text}>Gato</h1>
        <Board />
        <ScoreBoard />
      </div>
    )
  }
}

export default App