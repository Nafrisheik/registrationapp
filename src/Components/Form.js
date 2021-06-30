import React, { useState, useEffect } from "react";
import "./Form.css";
import { Button, Form, Col } from "react-bootstrap";
// import ToggleButton from "./ToggleButtons";
import DOB from "./DatePicker";
function Forms({userEdit}) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState("ta");

  const [name1, setName1] = useState("");
  const [number1, setNumber1] = useState("");
  const [email1, setEmail1] = useState("");
  const [dob1, setDob1] = useState("");
  const [location1, setLocation1] = useState("");
  const [id,setId]=useState("");

useEffect(() => {
  if(userEdit){
    setName1(userEdit.name);
    setNumber1(userEdit.mobile);
    setEmail1(userEdit.email);
    setDob1(userEdit.dob);
    setLocation1(userEdit.location);
    setId(userEdit._id);
  } 

})

  const handleSubmit = (e) => {
    const user = {
      name: name,
      mobile: number,
      email: email,
      job: job,
      dob: dob,
      location: location,
    };

if(id){
  fetch("https://registrationapp-backend.herokuapp.com/api/users", {
  method: "PUT",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  body: JSON.stringify(user),
  params:{id:id},
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

}else{
  fetch("https://registrationapp-backend.herokuapp.com/api/users", {
  method: "POST",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
e.preventDefault();

}
    // fetch("https://registrationapp-backend.herokuapp.com/api/users", {
      // method: "POST",
      // headers: { "Content-type": "application/json;charset=UTF-8" },
      // body: JSON.stringify(user),
    // })
      // .then((res) => res.json())
      // .then((res) => {
        // console.log(res);
      // });

    // e.preventDefault();
  };

  return (
    <div>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              value={name ? name:name1}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Profile Pic</Form.Label>
            <Form.File id="exampleFormControlFile1" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number"
              value={number ? number:number1}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email ? email:email1}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <Form.Label>DOB</Form.Label>&nbsp;&nbsp;&nbsp;
            <DOB addDOB={(dob) => setDob(dob? dob:dob1)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Pref.Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="location"
              value={location ? location :location1}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword"></Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          + Add / Update
        </Button>
      </Form>
    </div>
  );
}

export default Forms;
