import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import Nav from './components/Nav';
import Home from './components/Home';
import OperatorHome from './components/OperatorHome';
import DinerHome from './components/DinerHome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut.js';


function App() {
  
  return (
    <>
      <header>
        <Nav />
      </header>
      <section>
        <Switch>
          <PrivateRoute path='/operator' component={OperatorHome} />
          <PrivateRoute path='/diner' component={DinerHome} />
          <Route path='/signout' component={SignOut} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' component={Home} />
        </Switch>
      </section>
    </>
  );
}

export default App;
