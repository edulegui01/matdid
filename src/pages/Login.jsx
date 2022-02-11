import React from 'react'
import '../pages/Login.css'


const Login = () => {
    return (
    <div class = "container">
	    <div class="wrapper">
		    <form action="" method="post" name="Login_Form" class="form-signin">       
		    <h3 class="form-signin-heading">Inicio de Sesión</h3>
			  <hr class="colorgraph"/><br/>
			  
			  <input type="text" class="form-control" name="Username" placeholder="Username" required="" autofocus="" />
			  <input type="password" class="form-control" name="Password" placeholder="Password" required=""/>     		  
			 
			  <button class="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>  			
		    </form>			
	    </div>
    </div>
      );
}
 
export default Login;