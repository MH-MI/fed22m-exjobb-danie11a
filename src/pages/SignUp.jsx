import React from "react";
import { Link } from 'react-router-dom';

import { db } from './firebase.js'
import { useState } from "react";
import { getDocs, addDoc, collection, where, query} from 'firebase/firestore';
import user_icon from '../assets/icons/person.png';
import email_icon from '../assets/icons/email.png';
import password_icon from '../assets/icons/password.png';
import { Button } from "react-bootstrap";

const SignUp = () => {

	const [action, setAction ] = useState("Sign Up");
	const  [name, setName] = useState('')
	const  [email, setEmail] = useState('')
	const  [password, setPassword] = useState('')


	const dbref = collection(db, "Auth")

	
	const signup = async () => {
		
		const matchEmail = query(dbref, where('Email', '==', email))

		try 
		{
			const snapshot = await getDocs(matchEmail)
			const emailMatchingArray = snapshot.docs.map((doc) => doc.data())

			if (emailMatchingArray.length > 0) 
			{
				alert("This email already exists")
	
			} 
			else 
			{
	
				await addDoc(dbref, {Name: name, Email: email, Password: password})
				alert("Sign Up successfull 👍🏼")
			}
		}
		
		catch (error) {
			alert(error)

		}
	}

	

	return (
		<div className="container">
			<div className="header">
				<div className="text">{action}</div>
				<div className="underline"></div>
			</div>
			<div className="inputs">
				{action === "Login" ? <div></div>: 	<div className="input">
					<img src={user_icon} alt="" />
					<input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
				</div>}
			
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
				<Button className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up"); signup();}}>Sign Up</Button>
				<Link to="/login"><Button className={action === "Sign Up" ? "submit gray" : "submit"} >Login</Button></Link>
			</div>
		</div>
	)
};

export default SignUp;
