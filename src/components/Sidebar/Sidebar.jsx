import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { sideBarToggleActions } from '../../store/sideBarToggle';
const Sidebar = () => {
  const toggle = useSelector(store => store.toggle);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(sideBarToggleActions.setToggleSlice())
  }
  return (
    <>
      <nav className="sidebar_navigation">
          <Link to="/" onClick={handleToggle}>Home</Link>
          <Link to="/aboutus" onClick={handleToggle}>About</Link>
          <Link to="/contact" onClick={handleToggle}>Contact</Link>
          <RxCross1 style={{cursor: "pointer"}} className='text-white' onClick={handleToggle}/>
        </nav>
    </>
  )
}

export default Sidebar