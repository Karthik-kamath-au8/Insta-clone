import React,{useEffect,createContext,useReducer,useContext} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Switch, useHistory} from "react-router-dom"
import Home from './components/screens/Home';

import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import { initialState, reducer } from './reducers/userReducer';
import UserProfile from './components/screens/UserProfile';
import Signin from './components/screens/Signin';

export const UserContext = createContext()

const Routing = ()=>{
  const history=useHistory()
  const {dispatch}=useContext(UserContext)
  
  useEffect(()=>{

    const user=JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER",playload:user})
    }else{
      history.push("/signin")
    }
  },[])
  return (
    <Switch>
      <Route  exact path='/' component={Home}/>
      <Route   path='/signin' component={Signin}/>
      <Route  path="/signup" component={Signup}/>
      <Route exact path="/profile" component={Profile}/>
      <Route  path="/create" component={CreatePost}/>
      <Route  path="/profile/:userid" component={UserProfile}/>
    </Switch>
  )

}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routing/>
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
