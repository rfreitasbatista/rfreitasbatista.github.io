import React from 'react';
import Main from './pages/Main'
import Projects from './pages/Projects';
import Quotes from './pages/Quotes'
import Experiences from './pages/Experiences'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css'

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex'>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/experiences' component={Experiences} />
        <Route exact path='/contact' component={Main} />
        <Route exact path='/Quotes' component={Quotes} />
      </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
