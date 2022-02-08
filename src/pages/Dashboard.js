import React,{Component} from 'react';
import { Link } from 'react-router-dom';
// import Tab from 'react-bootstrap/Tab'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {NavBar, Nav, NavItem, Tab, Col, Row} from 'react-bootstrap';
import Userlist from "../Components/Userlist";
import Registerform from "../Components/Registerform";
import Projectproposal from "../Components/Projectproposal"
import Projectlist from "../Components/Projectlist"
import Adminprofile from "../Components/Adminprofile"
import Tabs from 'react-bootstrap/Tabs'
// import TabContainer from 'react-bootstrap/TabContainer'
// import TabContent from 'react-bootstrap/TabContent'
// import TabPane from 'react-bootstrap/TabPane'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Dashboard extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div className='container'>
                  <div class="row">
                            <div class="col-sm-6">
                                <h3 className='secone-form'>Madarth Admin Dashboard</h3>
                            </div>
                            <div class="col-sm-6 forgetpassword">
                                <Link to="/" class="btn btn-primary">Logout</Link>
                            </div>
                        </div>
                  <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="dashboard" title="Dashboard">
    <Userlist />
  </Tab>
  <Tab eventKey="adduser" title="Add User">
    <Registerform />
  </Tab>
  <Tab eventKey="projectproposal" title="Project Proposal">
    <Projectproposal />
  </Tab>
  <Tab eventKey="Saved Templates" title="Saved Templates">
    <Projectlist />
  </Tab>
  <Tab eventKey="Profile" title="Admin Profile">
    <Adminprofile />
  </Tab>
</Tabs>
                  {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Add User</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Add Proposal</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <Userlist />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Registerform />
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <p>welcome third</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container> */}
                  </div>
              </React.Fragment>
        )
    }
}
export default Dashboard;