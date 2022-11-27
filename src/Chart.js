import React from 'react'
import { createChart } from 'lightweight-charts';
import Data from './data';

export default function Chart() {

    const chart = createChart(document.body, { 
        width: 1920, 
        height: 1080,
        layout: {
            backgroundColor: "#253248",
            textColor:"#fff"
          },
          grid: {
            vertLines: {
              color: "#334158"
            },
            horzLines: {
              color: "#334158"
            }
          },
          
     });
    
    const candleSeries = chart.addCandlestickSeries();
   
    candleSeries.setData(Data);



    chart.timeScale().fitContent();

    return (
        <div />
    )
}
