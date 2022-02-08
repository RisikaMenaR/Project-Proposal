import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Table from 'react-bootstrap/Table'

class Userlist extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div className='container-hero'>   
                  <h3 className='secone-form'>Registered User</h3> 
                  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Your Role</th>
      <th>Your Id</th>
      <th>Date of Birth</th>
      <th>Date of Joining</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>abc</td>
      <td>abc@gmail.com</td>
      <td>Content- writer</td>
      <td>001</td>
      <td>Date of Brith</td>
      <td>Date of Joining</td>
      <td><button type="submit" class="btn btn-success">Edit</button></td>
      <td><button type="submit" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>abc</td>
      <td>abc@gmail.com</td>
      <td>Content- writer</td>
      <td>002</td>
      <td>Date of Brith</td>
      <td>Date of Joining</td>
      <td><button type="submit" class="btn btn-success">Edit</button></td>
      <td><button type="submit" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>abc</td>
      <td>abc@gmail.com</td>
      <td>Content- writer</td>
      <td>003</td>
      <td>Date of Brith</td>
      <td>Date of Joining</td>
      <td><button type="submit" class="btn btn-success">Edit</button></td>
      <td><button type="submit" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <td>4</td>
      <td>abc</td>
      <td>abc@gmail.com</td>
      <td>Content- writer</td>
      <td>004</td>
      <td>Date of Brith</td>
      <td>Date of Joining</td>
      <td><button type="submit" class="btn btn-success">Edit</button></td>
      <td><button type="submit" class="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <td>5</td>
      <td>abc</td>
      <td>abc@gmail.com</td>
      <td>Content- writer</td>
      <td>005</td>
      <td>Date of Brith</td>
      <td>Date of Joining</td>
      <td><button type="submit" class="btn btn-success">Edit</button></td>
      <td><button type="submit" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</Table>
                    {/* <Form>
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
                                <button type="submit" class="btn btn-primary">Login</button>
                                <p>Create an Account <Link to="/">Sign Up!</Link> </p>
                            </div>
                            <div class="col-sm-6 forgetpassword">
                                <Link to="/emailverify" class="btn btn-primary">Forgot Password?</Link>
                            </div>
                        </div>
                    </Form> */}
                    </div>
              </React.Fragment>
        )
    }
}
export default Userlist;