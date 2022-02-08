import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Table from 'react-bootstrap/Table'

class Adminprofile extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div class="card text-center">
  <div class="card-header">
    My Profile
  </div>
  <div class="card-body">
  <img class="Profile" src='assets/images/img_avatar.png'/>
  <h5 class="card-title">Welocme to Madarth Family</h5>
    <p class="card-text">Your Name</p>
    <p class="card-text">Your Id</p>
    <p class="card-text">Email Id</p>
    <p class="card-text">Date of Joining</p>
    <p class="card-text">Your Role</p>
    <p class="card-text">Date of Birth</p>
    <Link to="/changepassword" class="btn btn-primary">Change Password</Link>
  </div>
  <div class="card-footer text-muted">
    Last Edited 2 days ago
  </div>
</div>
              </React.Fragment>
        )
    }
}
export default Adminprofile;