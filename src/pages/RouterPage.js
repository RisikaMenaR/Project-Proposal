import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Emailverify from './Emailverify';
import Dashboard from './Dashboard';
import Userlist from "../Components/Userlist";
import Registerform from "../Components/Registerform";
import Projectproposal from "../Components/Projectproposal"
import Changepassword from "./Changepassword"
import App from '../App';


export default function RouterPage() {
    return(
        <div>
            <Router>
            {/* <Header /> */}
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/emailverify" component={Emailverify} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/userlist" component={Userlist} />
                    <Route path="/registerform" component={Registerform} />
                    <Route path="/projectproposal" component={Projectproposal} />
                    <Route path="/changepassword" component={Changepassword} />
                </Switch>
            {/* <Footer /> */}
            </Router>
        </div>
    )
}
