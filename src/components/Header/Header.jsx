import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sideBarToggleActions } from "../../store/sideBarToggle";

const Header = () => {
  // const [show , setShow] = useState(false);
 const toggle = useSelector(store => store.toggle);

 const dispatch = useDispatch();
 const handleToggle = () => {
   dispatch(sideBarToggleActions.setToggleSlice())
 }
  return (
    <>
    <header className="row header">
      <div className="col-2"> 
        <Link to="/">
          <img
            src="/Param_Computers_logo.jpg"
            alt="Param_Computers_logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="col-8">
        <div className="text-center">
          <h1 className="text-warning heading">Param computerS</h1>
          <h3 className="text-white sub-heading">EMPOWERING MINDS. TRANSFORMING FUTURES</h3>
        </div>
      </div>
      <div className="col-2">
        <nav className="navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div>
        <GiHamburgerMenu className="text-white fs-2 option_sidebar" style={{cursor:"pointer"}} onClick={handleToggle}/>
        </div>
        
      </div>
    </header>
    {
      toggle ? <Sidebar /> : null
    }
    
    </>
  );
};

export default Header;
