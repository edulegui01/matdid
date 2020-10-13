import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import './Sidebar.css'
import ButtonMenu from '../buttonMenu/ButtonMenu';
import { AiOutlineHome,AiOutlineShoppingCart,AiOutlineArrowRight,AiFillShopping } from 'react-icons/ai';
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
                    <a className="text-dark" style={{textDecoration:'none'}}><img src={logo} style={{height:'50px'}}/></a>
                    </div>
                </li>
                <li >
                    
                    <a href=""><AiOutlineHome className="icons"/>Home</a>
                </li>
                <li>
                    <span>ACCIONES</span>
                </li>
                <li>
                    <a href=""><AiOutlineShoppingCart className="icons"/>Compras</a>
                </li>
                <li>
                    <a href=""><BsGraphUp className="icons"/>Ventas</a>
                </li>
                <li>
                    <a href=""><AiOutlineArrowRight className="icons"/>Salidas</a>
                </li>
                <li>
                    <a href=""><FaFileInvoiceDollar className="icons"/>Pagos</a>
                </li>
                <li>
                    <a href=""><FaHandHoldingUsd className="icons"/>Cobros</a>
                </li>
                <li>
                    <span>ADMINISTRACION</span>
                </li>
                <li>
                    <a href=""><FiUsers className="icons"/>Empleados</a>
                </li>
                <li>
                    <a href=""><FiUsers className="icons"/>Proveedores</a>
                </li>
                <li>
                    <a href=""><FaBook className="icons"/>Productos</a>
                </li>
                <li>
                    <a href=""><FaBookReader className="icons"/>Clientes</a>
                </li>
                <li>
                    <span>REPORTES</span>
                </li>
                <li>
                    <a href=""><RiBarChart2Fill className="icons"/>Caja</a>
                </li>
                <li>
                    <a href=""><AiFillShopping className="icons"/>Stock</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar