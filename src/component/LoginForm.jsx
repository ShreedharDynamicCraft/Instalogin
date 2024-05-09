import React,{useState} from 'react';
import './Form.css';
function LoginForm(){
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');


const handleLogin=(e)=>
    {
e.preventDefault();
console.log('Logging in with :',username,password);
    }

return (
    <form className="Interface" onSubmit={handleLogin}>

        <input type="text" placeholder="Username" value={username}


onChange={(e)=>setUsername(e.target.value)}/>

<input type="password" placeholder="Password"
value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <button type="submit">login</button>

   
    </form>
);
};

export default LoginForm;