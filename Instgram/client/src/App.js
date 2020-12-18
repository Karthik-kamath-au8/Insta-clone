import React,{useEffect,createContext,useReducer,useContext} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Switch, useHistory} from "react-router-dom"
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import { initialState, reducer } from './reducers/userReducer';

export const UserContext = createContext()

const Routing =()=>{
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("User"))
    
    if(user){
      dispatch({type:"USER",platload:user})
      // history.push("/")
    }
    else{
      history.push("/login")
    }
  },[])
  return (
    <Switch>
      <Route  exact path='/' component={Home}/>
      <Route  exact path='/login' component={Login}/>
      <Route exact path="/Signup" component={Signup}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/create" component={CreatePost}/>
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
