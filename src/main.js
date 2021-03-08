// import './react-ie8-pollyfill'
import 'core-js'
import 'console-polyfill'
import ReactDOM from 'react-dom';
import React from 'react'

import APP from "./app";

ReactDOM.render(<APP />, document.getElementById('app'))