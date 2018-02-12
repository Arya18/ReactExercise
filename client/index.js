import React from 'react';
import ReactDOM from 'react-dom';

// main app
import ProjectRouter from './routes'

const rootEl = document.getElementById('app')

ReactDOM.render(
   <ProjectRouter />, rootEl
)
