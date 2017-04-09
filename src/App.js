import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PLAYER_ONE = 'X'
const PLAYER_TWO = 'O'

class App extends Component { 
  constructor(){
        super()
        this.state = {
          board:['','','','','','','','',''],
          currentPlayer:'X'
        }
  }
  handleClick(index){
    let board = this.state.board
    if(board[index]===''){
        board[index] = this.state.currentPlayer
        this.setState({
          board,
          currentPlayer:this.state.currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE
        })
    }
  }

  render(){
    return(
      <div>
        <h1>Tic Tac Toe</h1>
        <div>
          {this.state.board.map((square,index)=>(
            <div></div>
          ))}
        </div>
      </div>
    ) 
  }

}

export default App;
