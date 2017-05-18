import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Journal from './journal';
import AddForm from './add-form';
import GetSearch from './old-search';

export default function App(props) {
  return(
    <Router>
      <div>
        <h3><Link className="title-journey" to="/">A Journey of Life</Link></h3>
        <main>
          <Route exact path="/" component={Journal} />
          <Route exact path="/add" component={AddForm} />
          <Route exact path="/get" component={GetSearch} />
        </main>
      </div>
    </Router>
  );
}
