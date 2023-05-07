import React from 'react'
import {useState} from 'react'
export default function Postapi() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState("")
    const svaeUser=()=>{
        // console.log(name,email,phone)
        const data={name,email,phone}
        fetch("http://localhost:3000/Customer" ,{
            method : 'Post',
            headers : {
                "Accept":"application/json",
                "Content-type": "application/json"
            },
           body : JSON.stringify(data)
        }).then((result)=>{
            // console.log("result",result)
            result.json().then((resp)=>{
                // console.log(resp) check in console for seeing objects
            })
        })
    }
  return (
    <div>
        <h1>Post Method saves data of form in api</h1>
      User :<input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br/> <br/>
      Email:<input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/> <br/>
      Phoneno :<input type='text' name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/> <br/>
      <button type='button'onClick={()=>svaeUser()}>Save USer</button>
    
    </div>
  )
}
