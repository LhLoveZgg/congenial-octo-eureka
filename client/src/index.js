import React from 'react';
import reactDom, { render } from 'react-dom';
import Login from '@/pages/Login/index.js'
const App = () => (
    <Login/>
);
reactDom.render(<App/>, document.getElementById('root'))