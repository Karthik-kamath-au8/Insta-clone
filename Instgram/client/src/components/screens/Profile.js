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
                   src="https://images.unsplash.com/photo-1586378803006-a1914f40e036?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>

               </div>
               <div> 
                    <h4>{state?state.name:"Loading"}</h4>
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
