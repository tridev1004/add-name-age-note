import React, { useState } from "react";
import Card from "../UI/card";
import Button from "../UI/button";
import classes from "./AddUser.module.css";
import Errormodal from "../UI/Errormodal";
const Adduser = (props) => {
  const [enteredusername, setEnteredusername] = useState("");
  const [enteredage, setEnteredage] = useState("");
  const [error,  seterror] = useState('')

  const adduserhandler = (event) => {
    event.preventDefault();

    if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
         seterror({title:'Invalid input',
        message: 'please enter a valid name and age(  non-empty values)'})
      return;
    }
    if (+enteredage < 1) {
        seterror({title:'INvalid age',
        message: 'please enter a valid  age'
            

        })
      return;
    }
    props.onAdduser(enteredusername, enteredage);
    setEnteredage("");
    setEnteredusername("");
  };

  const usernamechangehandler = (event) => {
    setEnteredusername(event.target.value);
  };

  const agechangehandler = (event) => {
    setEnteredage(event.target.value);
  };
  const errorhandler = ()=>{
      seterror(null)
  }
  return (
    <div>
      {error && <Errormodal title={error.title} message={error.message}  onconfirm={errorhandler} />}
      <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={enteredusername}
            onChange={usernamechangehandler}
          />
          <label htmlFor="Age">"AGE(years)"</label>
          <input
            type="number"
            id="Age"
            value={enteredage}
            onChange={agechangehandler}
          />
          <Button type="submit"> adduser</Button>
        </form>
      </Card>
    </div>
  );
};

export default Adduser;
