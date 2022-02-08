import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div className='container'>   
                  <h3 className='secone-form'>Login Form</h3> 
                    <Form>
                        <FormGroup>
                            <Label for="exampleName">
                            Username or Email
                            </Label>
                            <Input
                            id="exampleName"
                            name="name"
                            placeholder="Enter your Username or Email"
                            type="name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleRole">
                            Your Role
                            </Label>
                            <Input
                            id="exampleRole"
                            name="role"
                            type="select"
                            >
                            <option>
                                Select Your Role
                            </option>
                            <option>
                                Admin
                            </option>
                            <option>
                                Bussiness Analytics
                            </option>
                            <option>
                                Developer
                            </option>
                            <option>
                                Desinger
                            </option>
                            <option>
                                Content Writer
                            </option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                            Password
                            </Label>
                            <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Enter your Password"
                            type="password"
                            />
                        </FormGroup>
                        
                        <div class="row">
                            <div class="col-sm-6">
                                {/* <button type="submit" class="btn btn-primary">Login</button> */}
                                {/* <p>Create an Account <Link to="/">Sign Up!</Link> </p> */}
                                <Link to="/dashboard" class="btn btn-primary">Login</Link>
                            </div>
                            <div class="col-sm-6 forgetpassword">
                                <Link to="/emailverify" class="btn btn-primary">Forgot Password?</Link>
                            </div>
                        </div>
                    </Form>
                    </div>
              </React.Fragment>
        )
    }
}
export default Login;