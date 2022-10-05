import React from 'react';
import {Container} from "react-bootstrap";
import handlelink from "../Shared/handlelink";
const Home = () => {
    return (
        <Container>
            <p>home</p>
            {handlelink(window.location.pathname)}
        </Container>
    );
};

export default Home;