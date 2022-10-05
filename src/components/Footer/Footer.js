import React, {Component} from 'react';
import {Container, Spinner} from "react-bootstrap";
import "./Footer.css"
class Footer extends Component {
    render() {
        return (
            <div className="footerb fixed-bottom">
                <Container className="text-center">
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                    <Spinner animation="border" variant="dark" />
                    <Spinner animation="border" variant="primary" />
                    <Spinner animation="border" variant="secondary" />
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="border" variant="danger" />
                </Container>
            </div>
        );
    }
}

export default Footer;