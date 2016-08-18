const React = require('react');
const ReactDOM = require('react-dom');

const ReactHighcharts = require('react-highcharts');

const config = require('./chart-config');

ReactDOM.render(
  <ReactHighcharts config={config}></ReactHighcharts>,
  document.getElementById('container')
);
