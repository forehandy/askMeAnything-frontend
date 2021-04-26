import React from "react";
import '../App.css';
// eslint-disable-next-line
import { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
    from "reactstrap";
import Title from "./title.js";
import { Link } from "react-router-dom";


function ask() {

    const cancelbutton = { color: "white" };
    return (
        <div>
            <h1 className="text-center">Make a question to the platform</h1>
            <Form className="ask">
                <FormGroup>
                    <Label>Question title</Label>
                    <Input type="email" placeholder="Enter your question title" />
                </FormGroup>
                <FormGroup>
                    <Label>Question text</Label>
                    <Input type="textarea" />
                </FormGroup>
                <FormGroup>
                    <Label>Keywords</Label>
                    <Input type="text" placeholder="Enter some keywords" />
                </FormGroup>
                <Button color="primary">
                    Submit
                </Button>
                {" "}
                <Button color="secondary">
                    <Link style={cancelbutton} to='/'>
                        Cancel
                </Link>
                </Button>
            </Form>
        </div>

    );
}

export default ask;