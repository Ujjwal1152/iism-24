// Sidebar.js
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './coreteamsidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className={`coreteam_sideBar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar_parent">
          <Nav defaultActiveKey="#t2" className="flex-column sidebar_menuHoverFill">
            <Nav.Link href="#t2">Events & Competitions</Nav.Link>
            <Nav.Link href="#t3">Marketing</Nav.Link>
            <Nav.Link href="#t4">Media & Publicity</Nav.Link>
            <Nav.Link href="#t5">Show Management</Nav.Link>
            <Nav.Link href="#t6">Finance</Nav.Link>
            <Nav.Link href="#t7">Public Relations</Nav.Link>
            <Nav.Link href="#t8">Security</Nav.Link>
            <Nav.Link href="#t9">Design</Nav.Link>
            <Nav.Link href="#t10">Web & App</Nav.Link>
            <Nav.Link href="#t1">Festival Coordinators</Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
