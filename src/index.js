/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import { TodoList } from '../components/TodoList';

require('!style-loader!css-loader!sass-loader!./index.scss');

let todos = [
    {
        id: 1,
        title: "Wash Clothes",
        summary: "Tide is fresher then Gain.",
        done: true
    },
    {
         id: 2,
         title: "Basketball Game",
         summary: "7:00 @North Shore",
         done: false
    }
];


ReactDom.render(<TodoList data={todos} />, document.getElementById('root'));
