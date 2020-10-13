import React,{useState} from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import '../Main/Main.css'
import logo from '../../images/logo.png'


const Main = () => {
    const [sidebar,setSidebar] = useState(false);
    const [left,setLeft] = useState(false);
    console.log(left);

    const showSidebar = () => {
        setSidebar(!sidebar);
        setLeft(!left);
    }
    return (
        <div style={{height:'100%'}}>
            <Header click={showSidebar}/>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar}/>
    <div className={left ? "main activate" : "main"}></div>

        </div>
      );
}
 
export default Main;