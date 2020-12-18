import React ,{useContext} from "react";
import {Link, useHistory} from "react-router-dom"
import { UserContext } from "../App";

const Navbar = () =>{
    const {state,dispatch}= useContext(UserContext)
    const history = useHistory()
    const renderList = () =>{
        if(state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
                 <li><Link to="/create">Create Post</Link></li>,
                 <li>
                    <button className="btn #62828 red-darken-1" 
                        onClick={()=>{localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push("/login")
                        }}>
                        Logout
                    </button>
                 </li>

            ]
        }else{
            return[
                <li><Link to="/login">Login</Link></li>,
            <li><Link to="/signup">Signup</Link></li>

            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white" style={{color:"black"}}>
            <Link to={state?"/":"/login"} className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right">
                {renderList()}
            {/* <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/create">Create Post</Link></li> */}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;