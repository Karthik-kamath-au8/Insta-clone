import React,{useEffect,useState}from 'react';
// import {UserContext} from "../../App"
import {useParams} from "react-router-dom"

const UserProfile =()=>{
    const [userProfile,setUserProfile] = useState([])
    // const {state,dispatch}= useContext(UserContext)
    const {userid}=useParams()
    console.log(userid)
  
    useEffect(()=>{
        // eslint-disable-next-line
        let isActive = true;
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt") 
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if (isActive) {
           
            
            console.log(result)
            setUserProfile(result)
            }
            
           
        })
        return () => {
            isActive = false;
          };
     
    },[userid])
    return(
        <>
        {userProfile ? 
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
                  <h4>{userProfile.user.name}</h4>
                  <h4>{userProfile.user.email}</h4>
                  <div style={{display:"flex",justifyContent:"space-around",width:"118%"}}>
                      <h6>{UserProfile.posts.length}</h6>
                      <h6>40 followers</h6>
                      <h6>40 following</h6>
                  </div>
             </div>
         </div>
         <div className="gallery">
             { 
                 userProfile.posts.map(item=>{
                  return(
                  <img key={item._id} className="item" src={item.photo} alt={item.title}/> 
                 )}
              
             )
             }
         </div>
     </div>
         : <h2>Loading..</h2>}
       
       </>

    )
    
}
export default UserProfile;
