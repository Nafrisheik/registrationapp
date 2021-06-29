import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import ToggleButton from './ToggleButtons';
function Forms() {


    
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fullname</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Profile Pic</Form.Label>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="email" placeholder="Enter Number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email Id</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Job Type</Form.Label>
            <Form.Control><ToggleButton/></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>DOB</Form.Label>
            <Form.Control type="password"/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Pref.Location</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">            
            
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
