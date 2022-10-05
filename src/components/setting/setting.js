import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import handlelink from "../Shared/handlelink";

class Setting extends Component {
    render() {
        return (
            <Container>
             <p>Setting</p>
                {handlelink(window.location.pathname)}
            </Container>
        );
    }
}

export default Setting;