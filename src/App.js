import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About }
  ];

function App() {
  return (
    <div className="App">
        {routes.map(({path, Component})=> {
            <Route key={path} exact path={path}>
                <div className="page">
                    <Component />
                </div>
            </Route>
        })}
    </div>
  );
}

export default App;
