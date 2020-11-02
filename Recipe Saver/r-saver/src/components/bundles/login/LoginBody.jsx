import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import SignUpModal from "./SignUpModal";
//CSS
import "../../../css/loginSignUp.css";
import ForgotPasswordModal from "./ForgotPasswordModal";
import PopupModal from "../../utility/PopModal";

class LoginBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { showSignUp, showForgotPassword } = this.props;
        return (
            <div className="loginBody">
                <Col>
                    <Form onSubmit={this.props.handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="inputLabel">
                                Email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                className="loginEmail"
                                onChange={this.props.handleChange}
                            ></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                            <Form.Label className="inputLabel">
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                className="loginPassword"
                                onChange={this.props.handleChange}
                            ></Form.Control>
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                float: "left",
                            }}
                        >
                            <Button
                                className="forgotPasswordButton"
                                type="button"
                                onClick={this.props.handleForgotPasswordShow}
                            >
                                Forgot Password?
                            </Button>
                            <Button
                                style={{ marginTop: "10px", width: "75px" }}
                                variant="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>
                    </Form>
                    <div>
                        <ForgotPasswordModal
                            show={showForgotPassword}
                            handleChange={this.props.handleChange}
                            handleClose={this.props.handleForgotPasswordClose}
                            handlePasswordReset={this.props.handlePasswordReset}
                        />
                    </div>
                </Col>
                <br />
                <Col>
                    <p className="inputLabel">Don't have an account?</p>
                    <Button onClick={this.props.handleSignUpShow}>
                        Sign Up!
                    </Button>
                    <SignUpModal
                        show={showSignUp}
                        handleChange={this.props.handleChange}
                        handleSignUp={this.props.handleSignUp}
                        handleClose={this.props.handleSignUpClose}
                        errors={this.props.errors}
                    />
                </Col>
                <PopupModal
                    show={this.props.showPopup}
                    handleClose={this.props.handlePopupClose}
                    content="An email has been sent to reset your password!"
                />
            </div>
        );
    }
}

export default LoginBody;
