import React from "react";
import '../App.css';
// eslint-disable-next-line
import { Component } from "react";
import { Button, Form, FormGroup, Label, Input }
    from "reactstrap";
import Title from "./title.js";
import { Link } from "react-router-dom";


function Login() {
    const loginbutton = { color: "white" };
    return (
        <div>
            <h1 className="text-center"> Log in to your AskMeAnythin account </h1>
            <Form className="login">
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password" />
                </FormGroup>
                <Button color="primary" >
                    Log in
            </Button>
                {" "}
                <Button color="secondary" >
                    <Link style={loginbutton} to='/signUp'>
                        Sign Up
                </Link>
                </Button>
            </Form>
        </div>


    );
}

export default Login;