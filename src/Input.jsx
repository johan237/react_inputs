import { useState } from "react"
import './Index.css'

export default function Input(props){
    
    let classNames = "inputDiv flexCol"
console.log(props)
    for(let key in props){
        classNames += ` inputDiv--${key}`
    }

    if(props.multiline){
        return (
         <div className={classNames}>
                <label htmlFor="inputName">Label</label>
                
                <textarea name="" id="" cols="30" rows="10">
                {props.value || "Placeholder"}    
                </textarea>
                {
                    props.helperText && <small>{props.helperText}</small>
                }
         </div>   
        )
    }else{
        return (
            <div className={classNames}>
                <label htmlFor="inputName">Label</label>
                <input  className={props.size ? `input input--${props.size}`: "input"} type="text" id="inputName" placeholder={props.value || "Placeholder"}  />
                {
                    props.helperText && <small>{props.helperText}</small>
                }
            </div>
        )
    }
    
}