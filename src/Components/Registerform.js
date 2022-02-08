import React,{Component} from 'react';
// import {useForm} from 'react-hook-form';
// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";

// import ReactDOM from "react-dom";

// import useForm from "react-hook-form";

import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Content from './backend';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(5),
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
});

export default function Registerform(){
    // render(){
        const {register, handleSubmit, errors} = useForm({
            resolver: yupResolver(schema),
        });

        const onSubmit = (data) => console.log(data);
        console.log(errors);
        return( 
              <React.Fragment>
                  <div className='container-hero'>  
                  <h3 className='secone-form'>Add User</h3>  
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {Content.inputs.map((input,key)=>{
                            return(
                                <FormGroup key={key}>
                            <Label for="exampleName">
                            {/* Name */}{input.label}
                            </Label>
                            <Input
                            id="exampleName"
                            name={input.name}
                            placeholder="Enter your Name"
                            type={input.type}
                            ref={register}
                            />
                            <p>{errors[input.name]?.message}</p>
                        </FormGroup>
                            );
                        })}
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </Form>
                    </div>
              </React.Fragment>
        )
    // }
}

// class Registerform extends Component{
    
    
// }
// export default Registerform;