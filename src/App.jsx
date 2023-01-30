import React,{ useState } from 'react'
import './Index.css'
import Input from './Input'


export default function App2(){
    return (

        <div className='flex inputBox'>
            <Input />
            <Input  helperText  = "this is the helper text" />
            <Input size = ''   multiline/>
            <Input error />
            <Input startIcon />
            <Input endIcon />
            <Input fullWidth />
            <Input disabled />

        </div>
    )
}