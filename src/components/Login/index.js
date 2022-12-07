import {useState} from "react"
import { useNavigate } from 'react-router-dom';

import "./index.css"


const Login=()=>{
    const navigate = useNavigate();
    const[username,setUSerName]=useState("");
    const[password,setPassword]=useState("");
    const[errMsg,setErrMsg]=useState(false);

    const onClickLogin=(event)=>{
            event.preventDefault()
        
        if(username==="mahesh" && password ==="mahesh123"){
            console.log("valid user");
            console.log(username,password)
           
            navigate('/')
         
        }else{
            setErrMsg(true)

            console.log("invalid user")    
        }
    }


    

        return(<div className="login-bg-container">
        <form onSubmit={onClickLogin} className="form-container">
            <label htmlFor="username" className="label">USERNAME:</label>
            <input type="text" 
            placeholder="ENTER USERNAME" 
            value={username} 
            id="username"
            className="field-name"
            onChange={(e)=>setUSerName(e.target.value)}   
            />
            <label htmlFor="pwd" className="label">PASSWORD:</label>
            <input type="password" 
            placeholder="ENTER PASSWORD" 
            id="pwd"
            value={password} 
            className="field-name"
            onChange={(e)=>setPassword(e.target.value)}   
            />
            <button type="submit" className="login-button">Login</button>
            {errMsg ? (<p className="error-msg">Invalid Credentials!</p>) : ""}
        </form>
        <p className="instruction">NOTE: The moment you login quiz time will start.***</p>
    </div>)
    
}

export default Login