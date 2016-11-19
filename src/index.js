import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {connect,Provider} from 'react-redux'

let chess = [
    [
        {color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},
    ],
    [
        {color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},
    ],
    [
        {color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},
    ],
    [
        {color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},
    ],
    [
        {color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},
    ],
    [
        {color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},
    ],
    [
        {color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},
    ],
    [
        {color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},{color: "white"},{color: 'black'},
    ],
]

var Line = React.createClass({
    render: function(){
        return(
            <div>
                {this.props.line.map((square,key) => {return <Square square={square} key={key}/> })}
            </div>
        )
    }
})

var Square = React.createClass({
    render: function(){
        return(
            <span style={{backgroundColor: this.props.square.color === 'black' ? 'black' : 'white',color: this.props.square.color === 'black' ? 'black' : 'white'}}>
                a
            </span>
        )

    }
})

var App = React.createClass({
    render: function(){
        return(
            <div>
                {chess.map((line,key) => {return <Line line={line} key={key}/>})}
            </div>
        )
    }
})

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
