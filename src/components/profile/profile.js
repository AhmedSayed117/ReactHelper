import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import handlelink from "../Shared/handlelink";

class Profile extends Component {
    render() {
        return (
            <Container>
                <p>profile</p>
                {handlelink(window.location.pathname)}

            </Container>
        );
    }
}

export default Profile;