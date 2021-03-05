// import 'core-js/features/object/define-property';
// import 'core-js/features/object/create';
// import 'core-js/features/object/keys';
// import 'core-js/features/array/for-each';
// import 'core-js/features/function/bind';
// import 'core-js/features/array/is-array';
// import 'core-js/features/array/index-of';
// import 'core-js/features/promise';
// import 'core-js/features/string/trim';
// require('es5-shim');
// require('es5-shim/es5-sham');
require('console-polyfill');

import "core-js"
// import "regenerator-runtime/runtime"

import ReactDOM from 'react-dom';
import React from 'react'

console.log(1)

import APP from "./app";

ReactDOM.render(<APP />, document.getElementById('app'))
