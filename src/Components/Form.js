import React, { useState ,useEffect} from "react";
import './Form.css'
import { Button, Form, Col } from "react-bootstrap";
// import ToggleButton from "./ToggleButtons";
import DOB from "./DatePicker";
function Forms() {

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("ta");


  console.log(checked1,checked2,checked3,dob);


  const handleSubmit= (e) => {    
    const user=({
      name:name,
mobile:number,
email:email,
job:job,
dob:dob,
location:location,

    })
    console.log(user);
    
      fetch("https://registrationapp-backend.herokuapp.com/api/users",{
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(res=>{
          console.log(res);
        });
        
    e.preventDefault();
  }



  return (
    <div>
      <Form onSubmit={e => {handleSubmit(e)}}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fullname</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required value={name} onChange={e => setName(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Profile Pic</Form.Label>
            <Form.File id="exampleFormControlFile1"/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="number" placeholder="Enter Number" value={number} onChange={e => setNumber(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email Id</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Job Type</Form.Label>
            {/* <Form.Control> */}
              <div className="switch-field">
                <input
                  type="radio"
                  id="radio-three"
                  name="switch-two"
                  value="yes"
                  checked={checked1}
                  onChange={(e) => setChecked1(e.currentTarget.checked)}

                />
                <label htmlFor="radio-three">FT</label>
                <input
                  type="radio"
                  id="radio-four"
                  name="switch-two"
                  value="maybe"
                  checked={checked2}
                  onChange={(e) => setChecked2(e.currentTarget.checked)}
                />
                <label htmlFor="radio-four">PT</label>
                <input
                  type="radio"
                  id="radio-five"
                  name="switch-two"
                  value="no"
                  checked={checked3}
                  onChange={(e) => setChecked3(e.currentTarget.checked)}

                />
                <label htmlFor="radio-five">Consultant</label>
              </div>
            {/* </Form.Control> */}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>DOB</Form.Label>
            <DOB addDOB={(dob)=>setDob(dob)}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Pref.Location</Form.Label>
            <Form.Control type="text" placeholder="location" value={location} onChange={e => setLocation(e.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword"></Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
