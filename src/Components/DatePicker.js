import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DOB = () => {
  const [dob, setDob] = useState(new Date());
  
  return (
    <DatePicker selected={dob} onChange={(date) => setDob(date)} />
  );
};

export default DOB;