import React, {Component} from 'react';
import {Button, Card, Container} from "react-bootstrap";
class CardDetails extends Component {

    render() {
        const data = this.props;
        return (
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"images/" + data.img}/>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                {/*{data.children}*/}
            </Container>
        );
    }
}

export default CardDetails;