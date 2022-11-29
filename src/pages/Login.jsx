import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {


    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    /*{
        "email": "max@gmail.com",
        "password": "pass1234"
    }
     */
    const submit = (data) => {
        axios
            .post("https://e-commerce-api.academlo.tech/api/v1/users/login", data)
            .then((res) => {
                navigate("/")
                console.log(res);
                localStorage.setItem("token", res.data.data.token);
            })
            .catch((error) => {
                if (error.response?.status === 404) {
                    // 404
                    alert("Credenciales incorrectas");
                } else {
                    console.log(error.response?.data);
                }
            });
        console.log(data);
    };



    return (
        <div>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;