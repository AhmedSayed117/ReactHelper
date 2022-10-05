import React from 'react';
import {Alert, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Error404 = ({color}) => {

    const handleClick = (e)=>{
        document.getElementById('alert').style.display = 'none'
    }
    return (
        <Container>
            <Alert id='alert' variant= {color} className='text-center'>
                <Link to='/'>
                    <Button id='back' variant="success" size="sm" className='float-start'>Go Profile</Button>
                </Link>
                <span >Error 404!</span>
                <Button id='close' variant="danger" size="sm" className='float-end' onClick={handleClick}>x</Button>
            </Alert>
        </Container>
    );
};

export default Error404;