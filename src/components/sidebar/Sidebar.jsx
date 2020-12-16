import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import ButtonMenu from '../buttonMenu/ButtonMenu';
import { AiOutlineHome,AiOutlineShoppingCart,AiFillShopping } from 'react-icons/ai';
import { BsGraphUp} from 'react-icons/bs';
import { FaHandHoldingUsd,FaFileInvoiceDollar,FaBook,FaBookReader} from 'react-icons/fa';
import { FiUsers} from 'react-icons/fi';
import { RiBarChart2Fill} from 'react-icons/ri';
import logo from '../../images/logo.png'




const Sidebar = (props) =>{
    

    return(
        <div className={props.sidebar ? "sidebar active" : "sidebar"}>
            <ul >
                <li style={{height:'56px'}}>
                    <ButtonMenu click={props.showSidebar}/>
                    <div className="logo">
                    <Link to="/matdid" className="text-dark" style={{textDecoration:'none'}}><img src={logo} alt="" /></Link>
                    </div>
                </li>
                <li >
                    
                    <Link to="/matdid" href="" className="link" style={{textDecoration:'none'}}><AiOutlineHome className="icons"/>Home</Link>
                </li>
                <li>
                    <span>ACCIONES</span>
                </li>
                <li>
                    <Link to="/Compras" className="link" href="" style={{textDecoration:'none'}}><AiOutlineShoppingCart className="icons"/>Compras</Link>
                </li>
                <li>
                    <Link to="/Ventas" href="" className="link" style={{textDecoration:'none'}}><BsGraphUp className="icons"/>Ventas</Link>
                </li>
                <li>
                    <Link to="/Pagos" href="" className="link" style={{textDecoration:'none'}}><FaFileInvoiceDollar className="icons"/>Pagos</Link>
                </li>
                <li>
                    <Link to="/Cobros" href="" className="link" style={{textDecoration:'none'}}><FaHandHoldingUsd className="icons"/>Cobros</Link>
                </li>
                <li>
                    <span>ADMINISTRACION</span>
                </li>
                <li>
                    <Link to="/Usuarios" href="" className="link" style={{textDecoration:'none'}}><FiUsers className="icons"/>Usuarios</Link>
                </li>
                <li>
                    <Link to="/Empleados" href="" className="link" style={{textDecoration:'none'}}><FiUsers className="icons"/>Empleados</Link>
                </li>
                <li>
                    <Link to="/Proveedores" href="" className="link" style={{textDecoration:'none'}}><FiUsers className="icons"/>Proveedores</Link>
                </li>
                <li>
                    <Link to="/Productos" href="" className="link" style={{textDecoration:'none'}}><FaBook className="icons"/>Productos</Link>
                </li>
                <li>
                    <Link to="/Clientes" href="" className="link" style={{textDecoration:'none'}}><FaBookReader className="icons"/>Clientes</Link>
                </li>
                <li>
                    <span>REPORTES</span>
                </li>
                <li>
                    <Link to="/matdid" href="" className="link" style={{textDecoration:'none'}}><RiBarChart2Fill className="icons"/>Caja</Link>
                </li>
                <li>
                    <Link to="/matdid" href="" className="link" style={{textDecoration:'none'}}><AiFillShopping className="icons"/>Stock</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar