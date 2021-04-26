import React from "react";
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText }
    from "reactstrap";
import { Link } from "react-router-dom";



function signUp() {
    const cancelbutton = { color: "white" };

    return (
        <div>
            <h1 className="text-center"> Create your account to AskMeAnything</h1>
            <Form className="signUp">
                <FormGroup>
                    <Label for="exampleEmail">Email (username)</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter your password" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Re-enter Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Re-enter your password " />
                </FormGroup>
                <Button color="primary ">
                    sign Up
                </Button>
                {" "}
                <Button color="secondary ">
                    <Link style={cancelbutton} to='/'>
                        Cancel
                </Link>
                </Button>
            </Form>
        </div>
    );
}

export default signUp;