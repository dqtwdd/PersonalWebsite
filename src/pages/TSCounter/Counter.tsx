import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '@/redux/action';

function mapStateToProps(state) {
  return {
    count: state.numReducer.count,
  };
}
function TSCounter(props) {
  function handleInc() {
    props.dispatch(increment());
  }

  function handleDec() {
    props.dispatch(decrement());
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={handleDec}>-</button>
        <span>{props.count}</span>
        <button onClick={handleInc}>+</button>
      </div>
    </div>
  );
}

// class Counter extends React.Component {
//   increment = () => {
//     this.props.dispatch(increment());
//   };

//   decrement = () => {
//     this.props.dispatch(decrement());
//   };

//   render() {
//     return (
//       <div>
//         <h2>Counter</h2>
//         <div>
//           <button onClick={this.decrement}>-</button>
//           <span>{this.props.count}</span>
//           <button onClick={this.increment}>+</button>
//         </div>
//       </div>
//     );
//   }
// }

export default connect(mapStateToProps)(TSCounter);
