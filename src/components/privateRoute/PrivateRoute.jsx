import React from 'react'
import {Route,Redirect} from 'react-router-dom'



const PrivateRoute = ({component:Component,...rest}) => {
    
    let verdad = false
    console.log("fsd")
    return ( 
        <Route {...rest}>{localStorage.length!==0 ? <Component/>:<Redirect to={"/"}/>}</Route>
     );
}
 
export default PrivateRoute;