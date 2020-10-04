import React from 'react'
import {Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './SideBar.scss'
import Map from '../../assets/Icons/map.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
    return (
        <Nav className="col-md-12 d-none d-md-block sidebar"
            activeKey="/home">
            <div className="sidebar-sticky"></div>
            <img src={Map} alt="none"></img>
            <Nav.Item>
                <NavLink exact={true} activeClassName='is-active' to="/">
                    <FontAwesomeIcon icon={faHome}/>
                   <span>Home</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink exact={true} activeClassName='is-active' to="/account">
                    <FontAwesomeIcon icon={faUser}/>
                    <span>Account</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <a href="#">
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                    <span>Logout</span>
                </a>
            </Nav.Item>
        </Nav>
    )
}
