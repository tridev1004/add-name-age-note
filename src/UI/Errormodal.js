import React from "react";
import Card from "./card";
import Button from "./button";
import classes from './ErrorModal.module.css'
const Errormodal = (props)=>{
        return (
        <div>
            <div className={classes.backdrop} onClick={props.onconfirm}/>
        <Card className={classes.modal}>

            <header className={classes.header}>
                <h2 >{props.title} </h2>
            </header> 
            <div className={classes.content}>
                <p>{props.message}</p>


            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onconfirm}>OK!</Button>
            </footer>
            </Card> 
            </div>
        )
}  

export default Errormodal;