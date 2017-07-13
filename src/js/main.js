/* global $ */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
//import { JsonGetter } from './JsonGetter.js';

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');


import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
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
);

// ----------------------------

(() => {


  const additionAction = (value) => {
    return {
      type: 'ADD_VALUE',
      value
    }
  }
  const clearAdditionAction = () => {
    return {
      type: 'CLEAR_VALUE',
    }
  }

  const additionReducer = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_VALUE':
        return state + action.value
      case 'CLEAR_VALUE':
        return 0;
      default:
        return state
    }
  }

  const AdditionComponent = ({ total, onClickToAdd, onClickToClear }) => {
    let textInput;
    return (
      <div>
          <label>足し算</label>
          <input type="text"
              id="exampleInputName1"
              placeholder="10"
              defaultValue="100"
              ref={(input) => { textInput = input; }}
          />
          <button onClick={() => onClickToAdd(textInput.value) }>足す</button>
          <button onClick={onClickToClear}>クリア</button>
          合計 <span>{total}</span>
      </div>
    );
  };

  AdditionComponent.propTypes = {
    total: PropTypes.number,
  };

  const mapStateToProps = (state/*, ownProps*/) => {
    const props = {
      total: state
    };
    return props;
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onClickToAdd: (value) => {
        const val = parseInt(value);
        if (_.isNaN(val)) {
          //
        } else {
          dispatch(additionAction(val));
        }
      },
      onClickToClear: () => {
        dispatch(clearAdditionAction());
      }
    }
  }
  
  const AdditionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdditionComponent)


  const store = createStore(additionReducer)

  render(
    <Provider store={store}>
      <AdditionContainer />
    </Provider>,
    document.getElementById('s12')
  )

})();

// ----------------------------

(() => {

  const Welcome = function(props) {
    return <h3>Hello, {props.name}</h3>;
  };

  //const element = <Welcome name="Foo" />;

  const Avatar = function(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  };

  const UserInfo = function(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  };

  const Comment = function(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  };

  function formatDate(date) {
    return date.toLocaleDateString();
  }

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  const App = function() {
    return (
      <div>
        <Welcome name="Foo" />
        <Welcome name="Bar" />
        <Welcome name="Baz" />
        <Comment
          author={comment.author}
          text={comment.text}
          date={comment.date}
        />
      </div>
    );
  };

  render(
    <App />,
    document.getElementById('s11')
  );

})();


// ----------------------------

// JavaScriptコードを埋め込むことができる。

(() => {
  const formatName = function (user) {
    return `${user.firstName} ${user.lastName}`;
  };
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  const element = (
    <h3>
      Hello, {formatName(user)}!
    </h3>
  );
  render(
    element,
    document.getElementById('s10')
  );
})();

// ----------------------------

render(
  <h3>Hello, world!</h3>,
  document.getElementById('s9')
);

// ----------------------------

const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b')
map2.get('b')
$('#s8').append(`map1.get('b') = ${map1.get('b')}`); // 2
$('#s8').append(document.createElement('br'));
$('#s8').append(`map2.get('b') = ${map2.get('b')}`); // 50


// ----------------------------

import { normalize, schema } from 'normalizr';

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [ comment ]
});

const originalData = {
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
};

$('#s7-1').text(JSON.stringify(originalData, null, "  "));
$('#s7-3').text(JSON.stringify(normalize(originalData, article), null, "  "));
//console.log(normalizedData);


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
