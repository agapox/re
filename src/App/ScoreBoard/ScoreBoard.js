import React from 'react';
import { Component } from 'react';
import PlayersScore from './PlayersScore/PlayersScore';

const style = {
  container: {
    height: '100%',
    width: '100%',
    margin: 'auto',
  },
  text: {
    color: '#cecece',
    textAlign: 'center'
  }
}

class ScoreBoard extends Component {

  render(){
    return(
      <div style={style.container}>
        <h2 style={style.text}>ScoreBoard</h2>
        <PlayersScore />
      </div>
    )
  }
}

export default ScoreBoard