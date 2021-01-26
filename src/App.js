import './App.css';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import Nav from './components/screens/includes/Nav';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Users from './components/screens/Users';
import User from './components/screens/User';


function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
