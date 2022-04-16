import React, {useState} from 'react';
import Adduser from './users/adduser';
import Userlist from './users/userlist';

function App() {
     const[userlist,setuserlist] =useState([])
     const adduserhandler = (uname,uage)=>{
           setuserlist((prevuserlist)=>{ 
             return [...prevuserlist,{name:uname,age:uage, id:Math.random().toString()}]
           })
     }
  return (
    <div>
        <Adduser  onAdduser={adduserhandler}/>
        <Userlist users = {userlist}/>
        
    </div>
   );  
 
} 

export default App;
