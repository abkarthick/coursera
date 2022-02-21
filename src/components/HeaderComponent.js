import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert('username: ' + this.username.value + 'password: ' + this.password.value + ' Remember Me: ' + this.remember.checked)
        event.preventDefault();
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
                                { link: '/aboutus', label: 'About Us', icon: 'fa fa-info' },
                                { link: '/contactus', label: 'Contact Us', icon: 'fa fa-address-card' }
                            ].map((navs, index) => {
                                return (
                                    <NavItem key={index}>
                                        <NavLink className="nav-link" to={navs.link}>
                                            <span className={`${navs.icon} fa-lg mr-1`}></span> {navs.label}
                                        </NavLink>
                                    </NavItem>
                                );
                            })}
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline color='light' onClick={this.toggleModal}>
                                    <span className='fa fa-sign-in fa-lg'></span> Login
                                </Button>
                            </NavItem>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username' placeholder='Username' innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password' placeholder='Password' innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}  /> Remember Me
                                </Label>
                            </FormGroup>
                            <Button type='submit' value='submit' className='bg-primary'>Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default Header;