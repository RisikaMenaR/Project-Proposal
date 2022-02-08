import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Projectproposal extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div className='container-hero'>   
                  <h3 className='secone-form'>Templates</h3> 
                  <Container className='container-proposalproject'>
  <Row>
    <Col sm><Link to="/"><img class="template" src='assets/images/snapsix.png'/></Link>
    <p className='proposal-content'>Blank</p></Col>
    <Col sm><Link to="/"><img class="template" src='assets/images/snapfive.png'/></Link>
    <p className='proposal-content'>Project proposal</p></Col>
    <Col sm><Link to="/"><img class="template" src='assets/images/snapfour.png'/></Link>
    <p className='proposal-content'>Resume</p></Col>
    <Col sm><Link to="/"><img class="template" src='assets/images/snapthree.png'/></Link>
    <p className='proposal-content'>Letter</p></Col>
    <Col sm><Link to="/"><img class="template" src='assets/images/snapone.png'/></Link>
    <p className='proposal-content'>Brochure</p></Col>
    {/* <Col sm><Link to="/"><img class="template" src='assets/images/snapone.png'/></Link></Col> */}
  </Row>
</Container>
                        {/* <div class="row">
                            <div class="col-sm-2">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                            <div class="col-sm-2">
                                <Link to="/signin" class="btn btn-primary">Sign In</Link>
                            </div>
                            <div class="col-sm-2">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                            <div class="col-sm-2">
                                <Link to="/signin" class="btn btn-primary">Sign In</Link>
                            </div>
                            <div class="col-sm-2">
                                <Link to="/signin" class="btn btn-primary">Sign In</Link>
                            </div>
                            <div class="col-sm-2">
                                <Link to="/signin" class="btn btn-primary">Sign In</Link>
                            </div>
                        </div> */}
                  </div>
              </React.Fragment>
        )
    }
}
export default Projectproposal;