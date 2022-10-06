import React, {Component} from 'react';
import {Button, Container, Form, Navbar, NavDropdown,Nav} from "react-bootstrap";
import "./navbar.css"
class Navbars extends Component {
    render() {
        let dataFromSearch="";
        const handleInputForm = (e)=>{
            dataFromSearch = e.target.value;
        }

        const handleInputSubmit = ()=>{
            console.log(dataFromSearch.length?dataFromSearch:"notFound")
        }
        return (
            <div className="navb">
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">

                                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                                    <Nav.Link href='/' >Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>


                                <Form className="d-flex" onChange={handleInputForm}>
                                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                                    <Button onClick={handleInputSubmit} variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Navbars;