import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
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


const Routes = () => {
    return ( 
        <div>
            <Router>
                <Route exact path="/matdid" component={Home}/>
                <Route exact path="/Compras" component={Compras}/>
                <Route exact path="/Ventas" component={Ventas}/>
                <Route exact path="/Pagos" component={Pagos}/>
                <Route exact path="/Cobros" component={Cobros}/>
                <Route exact path="/Usuarios" component={Usuarios}/>
                <Route exact path="/Empleados" component={Empleados}/>
                <Route exact path="/Proveedores" component={Proveedores}/>
                <Route exact path="/Productos" component={Productos}/>
                <Route exact path="/Clientes" component={Clientes}/>
                <Route exact path="/addcompra" component={AddCompra}/>
            </Router>
        </div>
     );
}
 
export default Routes;