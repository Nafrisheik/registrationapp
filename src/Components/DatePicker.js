import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DOB = (props) => {
  const [dob, setDob] = useState(new Date());
 
  
  return (
    <DatePicker selected={dob} onClickOutside={props.addDOB(dob)} onChange={(date) => setDob(date)} />
  );
};

export default DOB;