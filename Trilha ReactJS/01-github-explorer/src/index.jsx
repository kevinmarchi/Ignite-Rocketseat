import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'));

/*

render(<h1>Test</h1>, document.getElementById('root'));

import React from "react";

function Wrapper() {
    return <h1>Hello World</h1>
}

const user = {
    name: 'Kevin',
}

console.log(user.adress?.street); */