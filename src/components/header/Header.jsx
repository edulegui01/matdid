import React from 'react';
import {Link,BrowserRouter as Router} from 'react-router-dom'
import ButtonMenu from '../buttonMenu/ButtonMenu';
import './Header.css'
import logo from '../../images/logo.png'

const Header = (props) => {
    return (  
        <nav className="d-flex header " >
            <Router>
                <ButtonMenu click={props.click}/>
                <div className="logo">
                    <Link className="text-dark" style={{textDecoration:'none'}}><img src={logo} style={{height:'43px'}}/></Link>
                </div>
                <div className="close-sesion ml-auto mr-5" >
                    <Link className="text-dark" style={{textDecoration:'none'}}><i class="fas fa-user mr-2"></i>Usuario</Link>
                </div>
            </Router>
        </nav>
    );
}
 
export default Header;