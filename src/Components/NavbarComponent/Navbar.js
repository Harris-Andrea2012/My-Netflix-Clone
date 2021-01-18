import React, {useEffect, useState} from 'react'
import './NavbarStyle.css'
import avatar from '../../Images/avatar.png'
import logo from '../../Images/logo.png'

export default function Navbar() {
    const [navOpacity, setNavOpacity] = useState(false)
    function toggleNav(){
        if(window.scrollY > 50){
            setNavOpacity(true)
        }else{
            setNavOpacity(false)
        }

    }

    useEffect( ()=> {
        window.addEventListener("scroll", toggleNav)
        return ()=>{
            window.removeEventListener("scroll", toggleNav)
        }
    }, [])


    return (
       <div classname="nav" style={navOpacity ? opaqueNav : navStyle}>
           
           <img className="logo" src={logo} alt="Netflix Logo"/>
           <img className="avatar" src={avatar} alt="Netflix Logo"/>

       </div>
    )

    

}
const navStyle={
    position: 'fixed',
    top: '0px',
    width: '100%',
    padding: '20px',
    height: '60px',
    zIndex: '5',
    
}

const opaqueNav = {
    position: 'fixed',
    top: '0px',
    width: '100%',
    padding: '20px',
    height: '60px',
    zIndex: '5',
    
    backgroundColor: '#111'
}
