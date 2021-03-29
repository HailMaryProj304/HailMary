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

import React, { useState } from "react";
import Header from "./Header";
import HeroButton from "./HeroButton";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import Login from "./Login";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Main from "./components/MainPage";
import AccountPage from "./components/AccountPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PoliciesPage from "./components/PoliciesPage";
import PolicyPage from "./components/PolicyPage";
import MainPage from "./components/MainPage";
import LifeInsurance from "./services/LifeInsurance";
import MortgageInsurance from "./services/MortgageInsurance";
import DisabilityInsurance from "./services/DisabilityInsurance";
import CriticalIllnessInsurance from "./services/CriticalIllnessInsurance";
import HealthInsurance from "./services/HealthInsurance";
import LongTermCare from "./services/LongTermCare";

import AdminPage from "./components/AdminPage";
import RegisterAdmin from "./components/RegisterAdmin";
import ClientList from "./components/ClientList";

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
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Account">
            <AccountPage />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/MainPage">
            <MainPage />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/PoliciesPage">
            <PoliciesPage />
          </Route>
          <Route path="/PolicyPage">
            <PolicyPage />
          </Route>
          <Route path="/AdminPage">
            <AdminPage />
          </Route>
          <Route path="/RegisterAdmin">
            <RegisterAdmin />
          </Route>
          <Route path="/ClientList">
            <ClientList />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;