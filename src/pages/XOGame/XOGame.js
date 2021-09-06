import React from 'react';
// import ReactDOM from 'react-dom';
import './XOGame.css';
// class Square extends React.Component {

//   render() {
//     return (
//       <button className="square" onClick={()=>this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    let status = '';
    let ifEnd = calculateWinner(this.props.squares);
    if (ifEnd) {
      status = `Winner is ${ifEnd}`;
    } else {
      status = `Next player is: ${this.props.isFirstPlayer} ${this.props.isFirstPlayer ? 'X' : 'O'} `;
    }
    return (
      <div>
        <div className="status"> {status} </div>
        <div className="board-row">
          {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstPlayer: true,
      squares: Array(9).fill(null),
      history: [],
    };
  }

  handleClick(i) {
    const squares = JSON.parse(JSON.stringify(this.state.squares));
    const history = JSON.parse(JSON.stringify(this.state.history));
    if (this.state.squares[i] !== null || calculateWinner(this.state.squares)) return;
    if (this.state.isFirstPlayer) {
      squares[i] = 'X';
    } else {
      squares[i] = 'O';
    }
    let historyItem = {};
    historyItem.squares = squares;
    historyItem.text = `this is a ${this.state.isFirstPlayer ? 'X' : 'O'} placed on ${i}`;
    historyItem.currPlayer = squares[i];
    history.push(historyItem);
    this.setState({
      isFirstPlayer: !this.state.isFirstPlayer,
      squares,
      history,
    });
  }

  timeBack(i) {
    const squares = JSON.parse(JSON.stringify(this.state.history[i].squares));
    const history = JSON.parse(JSON.stringify(this.state.history)).slice(0, i + 1);
    const isFirstPlayer = this.state.history[i].currPlayer === 'X' ? false : true;
    this.setState({
      isFirstPlayer: isFirstPlayer,
      squares: squares,
      history: history,
    });
  }

  render() {
    const moves = this.state.history.map((step, move) => {
      return (
        <li key={move}>
          <button onClick={() => this.timeBack(move)}>
            {step.text}.current move is {move}
          </button>
        </li>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board
            isFirstPlayer={this.state.isFirstPlayer}
            squares={this.state.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div> time trip </div> <ol> {moves} </ol>
        </div>
        <GrandGrandPa />
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function GrandGrandPa() {
  return <div className="grand_grand_pa"> I 'm your GrandGrandPa!</div>;
}

// ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));

export default Game;
