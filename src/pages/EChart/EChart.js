import React, { useEffect, useState } from 'react';
import { waterMark } from '@/components/Watermark/index';
import * as echarts from 'echarts';
import './EChart.css';
import { Input } from 'antd';

function Game(props) {
  // console.log('waterMarkkkkkkkkkkkkkkkkk', waterMark);

  const [waterMarkTxt, setWaterMarkTxt] = useState('');
  let waterMarkLiving = new waterMark();
  console.log('waterrrrrrrrrrrrrrrr', waterMarkLiving.render);

  useEffect(() => {
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      legend: {},
      tooltip: {},
      dataset: {
        // 提供一份数据。
        source: [
          // ['product', '2015', '2016', '2017'],
          // ['Matcha Latte', 43.3, 85.8, 93.7],
          // ['Milk Tea', 83.1, 73.4, 55.1],
          // ['Cheese Cocoa', 86.4, 65.2, 82.5],
          // ['Walnut Brownie', 72.4, 53.9, 39.1],
          { value: 99, name: '董赫来栋栋操心' },
          { value: 1, name: '董赫来雨雨操心' },
        ],
      },
      // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
      series: [{ type: 'pie' }, { type: 'pie' }, { type: 'pie' }],
    });

    waterMarkLiving.render(waterMarkTxt);

    return function cleanup() {
      waterMarkLiving.destory();
    };
  });
  function handleClick() {
    alert('you clicked the button!!!!!!!!!');
  }
  function handleChange(e) {
    console.log('eeeeeeeeeeeeee', e);
    setWaterMarkTxt(e.target.value);
    waterMarkLiving.render(waterMarkTxt);
  }

  return (
    <div className="echart-container">
      hello world!
      <button onClick={handleClick}>click me!</button>
      you can input some text to change waterMark text:
      <Input
        placeholder="Please in put waterMarkTxt"
        onChange={handleChange}
        style={{ width: '200px', display: 'inline-block' }}
      />
      <div id="main"></div>
      <div className="front">I'm at the front</div>
    </div>
  );
}

export default Game;
