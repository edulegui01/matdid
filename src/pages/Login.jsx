import React,{useState,useRef, useEffect} from 'react';
import '../pages/Login.css';
import customFetcher from '../helpers/fetch';
import { useHistory } from 'react-router-dom';






const Login = () => {
    
	const [credentials,setCredentials] = useState({})
	const history = useHistory();
	const credentialsMessageRef = useRef()
	const [credentialMessage,setCredentialMessage] = useState("")
	console.log(history)
	

	


	const handleOnChange = (name,value) => {
		setCredentials({
			...credentials,
			[name]:value
		})
	}


	const handleOnConfirmLogin = async (e) => {
		e.preventDefault()

		const config = {
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify({'username':credentials.username,'password':credentials.password})
		}
		
		const response = await fetch('http://localhost:8000/api/token/',config)

		const body = await response.json()

		//console.log(body)
		//console.log(data)

		//const body = await response.json()


		if ( response.status === 200 ||  response.status === 201 ){

            // set user info
            localStorage.setItem('access_token',body.access);
            localStorage.setItem('refresh_token',body.refresh);
			console.log(window.location)
			
			window.location='/home'
            
		}else{
			console.log()
			setCredentialMessage(body.detail)
			
		}


		



	}
	
	return (
    <div class = "container">
	    <div class="wrapper">
		    <form action="" method="post" name="Login_Form" class="form-signin">       
		    <h3 class="form-signin-heading">Inicio de Sesión</h3>
			  <hr class="colorgraph"/><br/>
			  
			  <input type="text" class="form-control" name="username" placeholder="Username" required="" autofocus="" onChange={(e) => handleOnChange(e.target.name,e.target.value)} />
			  <input type="password" class="form-control" name="password" placeholder="Password" required="" onChange={(e) => handleOnChange(e.target.name,e.target.value)}/>     		  
			 
			  <button class="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" onClick={(e) => handleOnConfirmLogin(e)}>Login</button>  			
			  <small className="text-danger pl-1" ref={credentialsMessageRef}>{credentialMessage}</small>	
			</form>
			
	    </div>
		
    </div>
      );
}
 
export default Login;