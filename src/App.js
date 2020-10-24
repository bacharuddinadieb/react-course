import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from './routes/routes';

import './style/style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return <Route path={route.path} component={route.component} key={route.path} />;
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
