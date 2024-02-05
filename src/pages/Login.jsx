import React, { useState } from 'react'

import { db } from './firebase'
import { useNavigate } from 'react-router-dom';

import { getDocs, collection, where, query} from 'firebase/firestore';
import { Link } from 'react-router-dom';

import email_icon from '../assets/icons/email.png';
import password_icon from '../assets/icons/password.png';
import { Button } from "react-bootstrap";


const Login = ({ setAuthenticated  }) => {
    
    const navigate = useNavigate()
	const [action, setAction ] = useState("Login");
	//const  [name, setName] = useState('')
	const  [email, setEmail] = useState('')
	const  [password, setPassword] = useState('')
    //const [username, setUsername ] = useState('')
    
    const login = async () => {

        if (!email || !password) {
            // If email or password is empty, show an alert and return without attempting login
            alert("Please enter both email and password");
            return;
        }
    
		{
			const dbref = collection(db, 'Auth')
            
			try 
			{
				const emailMatch = query(dbref, where('Email', "==", email))
				const passwordMatch = query(dbref, where('Password', "==", password))
				const emailSnapshot = await getDocs(emailMatch)
				const emailArray = emailSnapshot.docs.map((doc) => doc.data())
				const passwordSnapshot = await getDocs(passwordMatch)
				const passwordArray = passwordSnapshot.docs.map((doc) => doc.data())

				if (emailArray.length > 0 && passwordArray.length > 0)
				{
					alert('Login successfully')
                    console.log("funkar det?")
                    setAuthenticated(true); 

                    navigate('/userpage')
				
				}
				else 
				{
					alert("OOOPSIE email or password is wrong")
				}

			}
			catch (error)
			{
				alert(error)

			}
		}
	}

  return (
    <div className="container">
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
    
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
    </div>
    {action === "Sign Up" ? <div></div> : 		<div className="forgot-password">Forgot Password? <span>Click here!</span></div>}

    <div className="submit-container">
     
    <Link to="/signuplogin"><Button className="submit" >Sign Up</Button></Link>
        <Button className="submit" onClick={login}>Login</Button>
    </div>
</div>
  )
}

export default Login
