import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Generation from '../pages/Generation';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/generation/:generation" component={Generation}/>
    </Switch>
)

export default Routes;