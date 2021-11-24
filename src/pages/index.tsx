import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
