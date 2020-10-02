import React from 'react'
import {Form,Button} from 'react-bootstrap'
import './Login.scss'
import Map from '../../../assets/Icons/map.png'

export default function Login() {
    return (
        <div className="login">
            <div className="login__header">
                <h5>Wellcome!</h5>
            </div>
            <div className="login__body">
                <img src={Map} alt="none"/>
                <Form>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Write your email"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Write your password"></Form.Control>
                    </Form.Group>
                    <Button>Login</Button>
                </Form>
            </div>
        </div>
    )
}
