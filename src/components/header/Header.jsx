import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import ButtonMenu from '../buttonMenu/ButtonMenu';
import './Header.css'
import logo from '../../images/logo.png'
import { useHistory } from 'react-router-dom';
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'

const Header = (props) => {
    const [dropDonw,setDropDonw]= useState(false)
    const history = useHistory();

    

    const openDropDonw = () =>{
        setDropDonw(!dropDonw)
    }

    const closeSesion = () =>{
        localStorage.clear()
        history.push('/')
    }
    
    return (  
        <nav className="d-flex header" >
            <div className="logo">
                <Link to="/matdid" className="text-dark" style={{textDecoration:'none'}}><img src={logo} alt="" style={{height:'43px'}}/></Link>
            </div>
            <div className="close-sesion ml-auto mr-5 btn-group" >
                <Dropdown isOpen={dropDonw} toggle={openDropDonw}>
                    <DropdownToggle caret>
                        <i className="fas fa-user mr-2"></i>Usuario
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem onClick={closeSesion}>
                            Cerrar Sesión
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                
            </div>
            
        </nav>
    );
}
 
export default Header;

//type="button"className="btn btn-default dropdown-toggle text-dark"  data-toggle="dropdown" style={{textDecoration:'none'}}
//ButtonMenu click={props.click}/>