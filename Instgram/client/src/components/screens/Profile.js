import React,{useEffect,useState,useContext}from 'react';
import {UserContext} from "../../App"

const Profile =()=>{
    const [mypics,setMypics] = useState([])
    const {state,dispatch}= useContext(UserContext)
    console.log(state)
    
    useEffect(()=>{
        let isActive = true;
        fetch("/mypost",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt") 
            }
        }).then(res=>res.json())
        .then(result=>{
            if (isActive) {
           
            console.log(result)
            setMypics(result.mypost)
            }
            
        })
        return () => {
            isActive = false;
          };
       
    },[])
    return(
       <div style={{maxWidth:"550px", margin:"0px auto"}}>
           <div style={{
               display:"flex",
               justifyContent:"space-around",
               margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>
               <div>
                   <img style={{width:"160px", height:"160px",borderRadius:"80px"}} alt=""
                   src={state?state.photo:"loading"}/>

               </div>
               <div> 
                    <h4>{state?state.name:"Loading"}</h4>
                    <h5>{state?state.email:"Loading"}</h5>
                    <div style={{display:"flex",justifyContent:"space-around",width:"118%"}}>
                        <h6>{mypics.length} posts</h6>
                        <h6>{state?state.followers.length:"0"} followers</h6>
                        <h6>{state?state.following.length:"0"} following</h6>
                    </div>
               </div>
           </div>
           <div className="gallery">
               { 
                   mypics.map(item=>{
                    return(
                    <img key={item._id} className="item" src={item.photo} alt={item.title}/> 
                   )}
                
               )
               }
           </div>
       </div>

    )
    
}
export default Profile;
