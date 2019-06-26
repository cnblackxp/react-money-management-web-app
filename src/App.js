import React from 'react';
import {useRoutes} from 'hookrouter';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  const routes = {
    '/': () => <Home />
  }

  const routerResult = useRoutes(routes);


  return (
    <div className="App">
      {routerResult || <NotFound />}
    </div>
  );
}

export default App;
