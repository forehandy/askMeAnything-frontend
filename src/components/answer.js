import React from "react";
import '../App.css';
import { Button, Form, FormGroup, Label, Input }
    from "reactstrap";
import { Link } from "react-router-dom";


function Answer() {

    const cancelbutton = { color: "white" };
    return (
        <div>
            <h1 className="text-center">Reply to an answer</h1>
            <Form className="answer">
                <FormGroup>
                    <Label for="exampleSelect">Select question</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input readOnly placeholder="keywords , read-only" />
                </FormGroup>
                <FormGroup>
                    <Label>Your answer</Label>
                    <Input type="textarea" />
                </FormGroup>
                <Button color="primary">
                    Submit answer
                </Button>
                {" "}
                <Button color="secondary">
                    <Link style={cancelbutton} to='/'>
                        Never mind
                </Link>
                </Button>
            </Form>
        </div>

    );
}

export default Answer;