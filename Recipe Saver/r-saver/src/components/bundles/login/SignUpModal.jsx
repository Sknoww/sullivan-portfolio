import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

//CSS
import "../../../css/loginSignUp.css";

class SignUpModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal
                className="signUpModal"
                show={this.props.show}
                onHide={this.props.handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modalLabel">Sign Up!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.handleSignUp}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="modalLabel">Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                className="loginName"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Label className="modalLabel">
                                Email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                className="loginEmail"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Label className="modalLabel">
                                Confirm Email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Confirm Email"
                                name="emailConfirmation"
                                className="loginEmail"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Text className="modalLabel">
                                {this.props.errors.email}
                            </Form.Text>
                            <Form.Label className="modalLabel">
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                className="loginPassword"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                            <Form.Label className="modalLabel">
                                Confirm Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password again"
                                name="passwordConfirmation"
                                className="loginPassword"
                                onChange={this.props.handleChange}
                                required
                            ></Form.Control>
                            <Form.Text className="modalLabel">
                                {this.props.errors.password}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default SignUpModal;
