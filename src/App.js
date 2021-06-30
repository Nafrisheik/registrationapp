import './App.css';
import CustomizedTables from './Components/Table';
import Forms from './Components/Form';
import { useState } from 'react';
function App() {
const [userEdit,setUserEdit]=useState({});

const updateFile=(file)=>{
  setUserEdit(file)
}

console.log(userEdit);
  return (
    <div className="app">  
           <Forms userEdit={userEdit}/>
           <CustomizedTables updateFile={updateFile}/>
                                    
    </div>
  );
}

export default App;
