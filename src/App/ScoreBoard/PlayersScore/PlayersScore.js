import React from 'react';
import { Component } from 'react';

const style = {
  row: {
    width: '100%'
  },
  container: {
    height: '100%',
    width: '50%',
    display: 'inline-block'
  },
  text: {
    color: '#cecece',
    textAlign: 'center'
  }
}

class PlayersScore extends Component {

  render(){
    return(
      <div style={style.row}>
        <div style={style.container}>
          <h3 style={style.text}>
            <i className="fa fa-close fa-2x" aria-hidden="true"></i>
          </h3>
          <h4 style={style.text}>100 Points</h4>
        </div>
        <div style={style.container}>
          <h3 style={style.text}>
            <i className="fa fa-circle-o fa-2x" aria-hidden="true"></i>
          </h3>
          <h4 style={style.text}>100 Points</h4>
        </div>

      </div>
      
    )
  }
}

export default PlayersScore