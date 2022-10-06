import React from 'react';
import {Alert, Button, CloseButton, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Error404 = ({color,buttonColor}) => {

    const handleClick = ()=>{
        document.getElementById('alert').style.display = 'none'
    }
    return (
        <Container>
            <Alert id='alert' variant= {color} className='text-center'>
                <Link to='/'>
                    <Button id='back' variant={buttonColor} size="sm" className='float-start'>Go Profile</Button>
                </Link>
                <span>Error 404!</span>
                <CloseButton onClick={handleClick} className='float-end'/>
            </Alert>
        </Container>
    );
};

export default Error404;