import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Table from 'react-bootstrap/Table'

class Projectlist extends  Component{
    render(){
        return(
              <React.Fragment>
                  <div className='container-hero'>   
                  <h3 className='secone-form'>Recent Document</h3> 
                  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name of the Project</th>
      <th>Edit</th>
      <th>Send</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>abc</td>
      <td><button type="submit" class="btn btn-info">Edit</button></td>
      <td><button type="submit" class="btn btn-primary">Send</button></td>
      <td><button type="submit" class="btn btn-success">Download</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>abc</td>
      <td><button type="submit" class="btn btn-info">Edit</button></td>
      <td><button type="submit" class="btn btn-primary">Send</button></td>
      <td><button type="submit" class="btn btn-success">Download</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>abc</td>
      <td><button type="submit" class="btn btn-info">Edit</button></td>
      <td><button type="submit" class="btn btn-primary">Send</button></td>
      <td><button type="submit" class="btn btn-success">Download</button></td>
    </tr>
    
  </tbody>
</Table>    
                    </div>
              </React.Fragment>
        )
    }
}
export default Projectlist;