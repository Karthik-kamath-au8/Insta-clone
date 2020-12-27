import React,{useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import M from 'materialize-css'

 const Signup =()=>{
     const history=useHistory()
     const [name,setName]=useState("")
     const [password,setPassword]=useState("")
     const [email,setEmail]=useState("")
     const PostData = () =>{
         // eslint-disable-next-line
         if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Inavlid Email",classes:"#c62828 red draken-3"})
            return
         }
         fetch("/signup",{
             method:"post",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.parse({
                 name:name,
                 password:password,
                 email:email,    
             })
         }).then(res=>res.json())
         .then(data=>{
             if(data.error){
                 M.toast({html:data.error,classes:"#c62828 red draken-3"})

             }
             else{
                 M.toast({html:data.message,classes:"#43a047 green draken-2"})
                 history.push("/login")
             }
         }).catch(err=>{
             console.log(err)
         })
     }
     return(
        <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input type="text" 
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input type="text" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" 
                onClick={()=>PostData()}>
                    SignUp
                </button>
                <h5>
                    <Link to ="/login">Already have an account?</Link>
                </h5>
               
            </div>
        </div>
     )
     
 }

 export default Signup;