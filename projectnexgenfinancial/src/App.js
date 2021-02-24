// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, {useState} from "react";
import Header from "./Header";
import HeroButton from "./HeroButton";
import Footer from "./Footer";
import About from "./About";
import Login from "./Login";
import Start from "./Start";
import Register from "./components/Register"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HeroButton />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Start">
            <Start />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

        </Switch>
      
      </Router>
      <Footer />
    </div>
  );
}

export default App;
