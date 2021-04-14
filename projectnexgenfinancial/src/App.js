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
import HeroButton from "./HeroButton";
import About from "./About";
import Services from "./Services";
import Login from "./Login";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Main from "./components/MainPage";
import AccountPage from "./components/AccountPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/navbar";
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
import QuotePage from "./components/QuotePage";
import AdminPolicyList from "./components/AdminPolicyList";
import AdminPolicyPage from "./components/AdminPolicyPage";
import ChangeClient from "./components/ChangeClient";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
          <Route path="/LifeInsurance">
            <LifeInsurance />
          </Route>
          <Route path="/DisabilityInsurance">
            <DisabilityInsurance />
          </Route>
          <Route path="/CriticalIllnessInsurance">
            <CriticalIllnessInsurance />
          </Route>
          <Route path="/HealthInsurance">
            <HealthInsurance />
          </Route>
          <Route path="/LongTermCare">
            <LongTermCare />
          </Route>
          <Route path="/MortgageInsurance">
            <MortgageInsurance />
          </Route>
          <Route path="/Quote">
            <QuotePage />
          </Route>
          <Route path="/AdminPolicyList">
            <AdminPolicyList />
          </Route>
          <Route path="/AdminPolicyPage">
            <AdminPolicyPage />
          </Route>
          <Route path="/ChangeClient">
            <ChangeClient />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;