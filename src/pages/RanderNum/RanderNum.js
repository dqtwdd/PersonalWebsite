// import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// ReactDOM.render(
//     <h1>Hello world!</h1>,
//     document.getElementById('demo')
// )
function handleClick() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments);
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };
  return _adder;
}
function Container(props) {
  const [random, setRandom] = useState(Math.floor(Math.random() * 100));

  function lllllll() {
    setRandom(Math.floor(Math.random() * 100));
  }
  // useEffect(()=>{
  //     alert('hello world');
  // })
  return (
    <div
      style={{ width: '150px', height: '150px', background: 'green', color: 'pink' }}
      onClick={() => {
        lllllll();
      }}
    >
      this is a square.
      {random}
    </div>
  );
}
// let current = 1;
// setInterval(() => {
//   current += 1;
//   ReactDOM.render(
//     <div>
//       <h1>Hello world! {current} seconds left...</h1>
//       <Container />
//     </div>,
//     document.getElementById('demo'),
//   );
// }, 1000);
export default Container;
