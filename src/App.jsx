import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import UserPage from './pages/UserPage';
import ProductPage from './pages/ProductPage';
import TaskPage from './pages/TaskPage';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/users">
            <UserPage />
          </Route>
          <Route path="/products">
            <ProductPage />
          </Route>
          <Route path="/tasks">
            <TaskPage />
          </Route>
          <Route path="/">
            {/* Página inicial ou redirecionamento */}
            <UserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
