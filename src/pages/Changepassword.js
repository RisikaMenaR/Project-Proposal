import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Changepassword extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div className='container'>
                  <h3 className='secone-form'>Change Password?</h3>    
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Email
                            </Label>
                            <Input
                            id="exampleEmail"
                            name="name"
                            placeholder="Enter your Email Id"
                            type="email"
                            />
                        </FormGroup>
                        
                        <div class="row">
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary">Send Email</button>
                            </div>
                            <div class="col-sm-6 forgetpassword">
                                <Link to="/dashboard" class="btn btn-primary">Back to dashboard</Link>
                            </div>
                        </div>
                    </Form>
                    </div>
              </React.Fragment>
        )
    }
}
export default Changepassword;