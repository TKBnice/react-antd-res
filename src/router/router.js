
import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LayoutHome from '../home/layoutHome';
import Login from '../login/login';
export default class Routers extends Component {
  render() {
    return (
             <Router >
                  <Switch>
                    <Route  path="/" component={LayoutHome}/>
                    {/* <Route  path="/login" component={Login}/> */}
                  </Switch>
					  </Router>
    );
  }
}
