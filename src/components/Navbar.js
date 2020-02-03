import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    activeStyle= {color: "#e2970d", borderBottom: "1px solid #e2970d"};

    handleToggle = () => {
        
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
       
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" >
                            <img src={logo} alt="Beach resort" />
                        </Link>

                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ?
                        "nav-links show-nav" : "nav-links"}>
                        <li>
                            <NavLink to="/" activeStyle={this.activeStyle} exact>Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rooms" activeStyle={this.activeStyle}>Rooms </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
