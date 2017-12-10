import React from 'react';
import { Component } from 'react';
import Square from './Square/Square';

const style = {
  container: {
    height: '300px',
    width: '300px',
    margin: 'auto'
  },
  row: {
    margin:'auto'
  },
  text: {
    color: 'lightblue',
    margin: 'auto'
  }
}

class Board extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      initialTurn: 0,
      playerTurn: true,
      //turnNumber: this.initialTurnNumber
    }
    console.log('Turno: ' + this.state.initialTurn)
  }

  handleSquareClick() {

    
    if (this.state.canPlay) {
      console.log(this)
      console.log('Cuadro #' + this.props.keySquare + ' Cliqueado!!!')
      this.setState({initialTurn: this.initialTurn++})
      console.log('Turno: ' + this.state.initialTurn)
      this.setState({canPlay: false})
      this.setState({playerTurn: !this.state.playerTurn})
    }
  }

  
  render(){
    let squares = [null,null,null,null,null,null,null,null,null];
    
    return(
      <div style={style.container}>
        <div style={style.row}>
          { squares.map(
            (squares, i) => {
              return(
                <Square
                  key={i}
                  keySquare={i}
                  squareClicked={this.handleSquareClick}
                  initialTurn={this.state.initialTurn}
                />
              )
            }
          )}
        </div>
      </div>
    )
  }
}

export default Board