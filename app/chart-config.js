const _ = require('lodash');
const dataset = require('./dataset');

module.exports = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Romania\'s all-time Summer Olympic medals'
  },
  xAxis: {
    categories: dataset.years
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total medals'
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: false
      }
    },
    series: {
      animation: {
        duration: 2000
      }
    }
  },
  series: dataset.series
}
