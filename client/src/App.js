import logo from './logo.svg';
import './App.css';
import React from 'react';
import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const Test = React.lazy(() => import('./components/testComponent/test'));

function App() {
  return (
    <>
    <head>
    </head>
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        
          <Switch>
            <Route exact path='/test' render={props => <Test {...props} />}></Route>
          </Switch>
        
      </Suspense>
    </BrowserRouter>
  </>
  );
}

export default App;
