/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
//import { JsonGetter } from './JsonGetter.js';

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import PropTypes from 'prop-types'
import Addition from './containers/Addition'
import Multiplication from './containers/Multiplication'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root-todolist')
)

// ----------------------------

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
Welcome.propTypes = {
  name: PropTypes.string
};

const App2 = () => {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

render(
  <App2 />,
  document.getElementById('root-name-list')
);

// ----------------------------

const TickElement = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

const tick = () => {
  //const element = (
  //  <div>
  //    <h1>Hello, world!</h1>
  //    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //  </div>
  //);
  render(
    <TickElement />,
    document.getElementById('root-tick')
  );
}
setInterval(tick, 1000);

const tick2 = () => {
  render(
    <TickElement />,
    document.getElementById('root-tick2')
  );
}
setInterval(tick2, 1000);

// ----------------------------

render(
  <Provider store={store}>
    <Addition />
  </Provider>,
  document.getElementById('root-addition')
)

render(
  <Provider store={store}>
    <Multiplication />
  </Provider>,
  document.getElementById('root-multiplication')
)
