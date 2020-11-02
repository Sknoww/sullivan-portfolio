import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class ForgotPasswordModal extends Component {
    render() {
        return (
            <Modal
                className="signUpModal"
                show={this.props.show}
                onHide={this.props.handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modalLabel">
                        Password Recovery
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.props.handlePasswordReset}>
                        <Form.Group controlId="formBasicEmail">
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
                            <Form.Text className="modalLabel">
                                Enter your email and we'll send you a password
                                reset
                            </Form.Text>
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Reset Password
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

export default ForgotPasswordModal;
