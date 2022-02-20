import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <>
                {/* <React.Fragment></React.Fragment> same as  <></> */}
                <Navbar dark expand="md">
                    <NavbarBrand href="/">
                        <img src="assets/images/logo.png" alt="Restuarant" height="30" width="41" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse navbar isOpen={this.state.isNavOpen} className='d-md-flex justify-content-end mr-5' >
                        <Nav navbar>
                            {[
                                { link: '/home', label: 'Home', icon: 'fa fa-home' },
                                { link: '/menu', label: 'Menu', icon: 'fa fa-list' },
                                { link: '/aboutus', label: 'About', icon: 'fa fa-info' },
                                { link: '/contactus', label: 'Contact', icon: 'fa fa-address-card' }
                            ].map((navs, index) => {
                                return (
                                    <NavItem key={index}>
                                        <NavLink className="nav-link" to={navs.link}>
                                            <span className={`${navs.icon} fa-lg mr-1`}></span> {navs.label}
                                        </NavLink>
                                    </NavItem>
                                );
                            })}
                            {/* <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className='fa fa-home fa-lg'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className='fa fa-info fa-lg'></span> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className='fa fa-list fa-lg'></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className='fa fa-address-card fa-lg'></span> Contact
                                </NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;