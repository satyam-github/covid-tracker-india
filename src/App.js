import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navigation/NavigationItems';
import Home from './components/home/Home';
import Contacts from './components/contact/Contacts';
import Districts from './components/districtwise/Districts';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/resources" component={Contacts} />
        <Route exact path="/states/:id" component={Districts} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
