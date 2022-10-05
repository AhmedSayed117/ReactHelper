import React, {Component} from 'react';
import handlelink from "../Shared/handlelink";
import {Container} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <p>About</p>
                {handlelink(window.location.pathname)}
            </Container>
        );
    }
}

export default About;