import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

//CSS

class PasswordResetBody extends Component {
    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.props.handlePasswordReset}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="inputLabel">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            className="loginPassword"
                            onChange={this.props.handleChange}
                        ></Form.Control>
                        <Form.Text className="text-muted"></Form.Text>
                        <Form.Label className="inputLabel">
                            Confirm Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            name="passwordConfirmation"
                            className="loginPassword"
                            onChange={this.props.handleChange}
                        ></Form.Control>
                        <Form.Text className="text-primary">
                            {this.props.errors}
                        </Form.Text>
                    </Form.Group>
                    <Button
                        style={{ marginBottom: "5px" }}
                        variant="primary"
                        type="submit"
                    >
                        Reset Password
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default PasswordResetBody;
