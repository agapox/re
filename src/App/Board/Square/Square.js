import React from 'react';
import { Component } from 'react';

const style = {
  container: {
    height: '96px',
    width: '96px',
    //background: 'rbga(255,255,256,0.08)',
    display:'inline-block',
    border: '2px solid #fff',
    background: 'transparent'
  },
  text: {
    textAlign: 'center',
    margin: 'auto',
    color: '#fff',
    height: '100%',
    paddingTop: '12px',
  }
}

class Square extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      canPlay: true,
      initialTurn: this.props.initialTurn
    }
  }

  render(){
    return(
      <button style={style.container} onClick={this.props.squareClicked.bind(this)}>
        <p style={style.text}>
          <PlayerChip playerTurnChip={this.state.playerTurn} initialTurn={this.state.initialTurn} />
        </p>
      </button>
    )
  }
}

class PlayerChip extends Component {

  render() {
    /*if (this.props.initialTurn === 0) {
      return ''
    } else*/ if (this.props.playerTurnChip) {
      return <i className="fa fa-circle-o fa-5x" aria-hidden="true"></i>
    } else {
      return <i className="fa fa-close fa-5x" aria-hidden="true"></i>
    }
  }


}

export default Square