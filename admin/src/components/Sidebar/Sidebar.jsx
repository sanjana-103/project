import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogOut, IoMdAddCircleOutline } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({ setToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <div>
      <div className="sidebar-header">
        <h2>Recipe</h2>
      </div>
      <div className="sidebar-links">
        <NavLink to="/add" className="sidebar-link">
          <IoMdAddCircleOutline className="sidebar-icon" />
          <p className="sidebar-text">Add Recipes</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-link">
          <MdFormatListBulleted className="sidebar-icon" />
          <p className="sidebar-text">List Recipes</p>
        </NavLink>
        <button
          type="button"
          className="sidebar-link"
          onClick={handleLogout}
        >
          <IoMdLogOut className="sidebar-icon" />
          <p className="sidebar-text">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
