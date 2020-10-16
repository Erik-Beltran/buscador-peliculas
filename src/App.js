import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import MovieInfo from './components/MovieInfo/MovieInfo';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={MovieInfo} exact />
        </Switch>
      </div>
    </Router>
  )

}

export default App;