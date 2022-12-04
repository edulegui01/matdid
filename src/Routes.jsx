import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Compras from './pages/Compras'
import Ventas from './pages/Ventas'
import Pagos from './pages/Pagos'
import Cobros from './pages/Cobros'
import Usuarios from './pages/Usuarios'
import Empleados from './pages/Empleados'
import Proveedores from './pages/Proveedores'
import Productos from './pages/Productos'
import Clientes from './pages/Clientes'
import AddCompra from './components/add/AddCompra'
import Modal from './components/modal/Modal'
import Login from './pages/Login'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import { Redirect } from 'react-router-dom'
import PageNoFound from './pages/PageNoFound'


const Routes = () => {
    
    const ComponenteElegido = localStorage.length!==0 ? <Compras/>: <Redirect to={'/'}/>
    
    return ( 
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute exact path="/home" component={Home}/>
                    <Route exact path="/compras">{localStorage.length!==0 ? <Compras/>: <Redirect to={'/'}/>}</Route>
                    <PrivateRoute exact path="/ventas" component={Ventas}/>
                    <PrivateRoute exact path="/pagos" component={Pagos}/>
                    <Route exact path="/cobros" component={Cobros}/>
                    <PrivateRoute exact path="/usuarios" component={Usuarios}/>
                    <PrivateRoute exact path="/empleados" component={Empleados}/>
                    <PrivateRoute exact path="/proveedores" component={Proveedores}/>
                    <PrivateRoute exact path="/productos" component={Productos}/>
                    <PrivateRoute exact path="/clientes" component={Clientes}/>
                    <PrivateRoute exact path="/addcompra" component={AddCompra}/>
                    <PrivateRoute exact path="/prueba" component={Modal}/>
                    <Route component={PageNoFound}/>   
                </Switch>
            </Router>
        </div>
     );
}
 
export default Routes;