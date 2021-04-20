import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
