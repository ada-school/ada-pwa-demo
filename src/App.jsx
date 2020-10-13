import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { ModuleDetail } from './pages/ModuleDetail';
import { ModuleList } from './pages/ModuleList';
import './style.css';

export const App = ()=>{
  return <main>
    <Header />
    <Router>
      <Switch>
        <Route path="/pwa/:contentId">
          <ModuleDetail />
        </Route>
        <Route path="/">
          <ModuleList />
        </Route>
      </Switch>
    </Router>
  </main>
}