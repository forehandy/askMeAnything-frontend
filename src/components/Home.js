import React from "react";
import '../App.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';



function Home() {
    return (
        <div>
            <h1 className="text-center">
                Welcome to the Home page.
            </h1>
            <Row>
                <Col sm="3">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle tag="h1">question per Keyword graph/table</CardTitle>
                        <CardText> Andy is you daddy</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle tag="h1">questions per day/ period graph/table</CardTitle>
                        <CardText> Andy is you daddy</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card body inverse style={{ backgroundColor: "#333", borderColor: '#333' }}>
                        <CardTitle tag="h1">ask a new question</CardTitle>
                        <CardText> Andy is you daddy</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} y>
                        <CardTitle tag="h1">answer a question</CardTitle>
                        <CardText> Andy is you daddy</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
            </Row>


        </div>
    );
}

export default Home;