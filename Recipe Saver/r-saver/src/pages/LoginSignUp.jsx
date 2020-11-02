import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import LoginBody from "../components/bundles/login/LoginBody";
import DatabaseControls from "../components/utility/DatabaseControls";

class LoginSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            emailConfirmation: "",
            password: "",
            passwordConfirmation: "",
            user: {},
            errors: { email: "", password: "" },
            showSignUp: false,
            showForgotPassword: false,
            showPopup: false,
            userLoggedin: this.props.userLoggedin,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordReset = this.handlePasswordReset.bind(this);
        this.comparePasswords = this.comparePasswords.bind(this);
        this.compareEmails = this.compareEmails.bind(this);
        this.handleSignUpShow = this.handleSignUpShow.bind(this);
        this.handleSignUpClose = this.handleSignUpClose.bind(this);
    }

    async handleSignUp(event) {
        event.preventDefault();
        event.persist();
        const { email, password, errors } = this.state;
        const { auth } = this.props;
        if (this.comparePasswords() && this.compareEmails()) {
            await auth
                .signup(email, password)
                .then((response) => {
                    const dbControls = new DatabaseControls();
                    dbControls.createNewUsersDocument(email);
                    this.handleLogin(event, true);
                })
                .catch((error) => console.log("It's an error", error));

            this.handleSignUpClose();
        } else {
            if (!this.comparePasswords()) {
                errors["password"] = "Passwords do not match";
            } else {
                errors["password"] = "";
            }
            if (!this.compareEmails()) {
                errors["email"] = "Emails do not match";
            } else {
                errors["email"] = "";
            }
            this.setState({
                errors: errors,
            });
        }
    }

    async handleUserUpdate(user) {
        await user
            .update({
                data: {
                    full_name: this.state.name,
                },
            })
            .catch((error) => {
                console.log("Failed to update user: %o", error);
                throw error;
            });
    }

    async handleLogin(event, newUser) {
        event.preventDefault();
        const { email, password } = this.state;
        const { auth } = this.props;
        await auth
            .login(email, password, true)
            .then((response) => {
                const user = auth.currentUser();
                if (newUser) {
                    this.handleUserUpdate(user);
                }
                this.props.handleUserLogin(user);
                this.props.history.push("/Dashboard");
            })
            .catch((error) =>
                console.log("Failed :( " + JSON.stringify(error))
            );
    }

    handlePasswordReset(e) {
        e.preventDefault();
        const { auth } = this.props;
        auth.requestPasswordRecovery(this.state.email)
            .then((response) => {
                console.log("Recovery email sent", { response });
                this.handleForgotPasswordClose();
                this.handlePopupShow();
            })
            .catch((error) =>
                console.log("Error sending recovery mail: %o", error)
            );
    }

    comparePasswords() {
        const { password, passwordConfirmation } = this.state;
        return password === passwordConfirmation;
    }

    compareEmails() {
        const { email, emailConfirmation } = this.state;
        return email === emailConfirmation;
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSignUpShow = () => {
        this.setState({
            showSignUp: true,
        });
    };

    handleSignUpClose = () => {
        this.setState({
            showSignUp: false,
        });
    };

    handleForgotPasswordShow = () => {
        this.setState({
            showForgotPassword: true,
        });
    };

    handleForgotPasswordClose = () => {
        this.setState({
            showForgotPassword: false,
        });
    };

    handlePopupShow = () => {
        this.setState({
            showPopup: true,
        });
    };

    handlePopupClose = () => {
        this.setState({
            showPopup: false,
        });
    };

    render() {
        const {
            showSignUp,
            showForgotPassword,
            showPopup,
            errors,
        } = this.state;
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer
                        header="Login"
                        body={
                            <LoginBody
                                {...this.props}
                                handleChange={this.handleChange}
                                handleLogin={this.handleLogin}
                                handleSignUp={this.handleSignUp}
                                handleSignUpShow={this.handleSignUpShow}
                                handleSignUpClose={this.handleSignUpClose}
                                handlePasswordReset={this.handlePasswordReset}
                                handleForgotPasswordShow={
                                    this.handleForgotPasswordShow
                                }
                                handleForgotPasswordClose={
                                    this.handleForgotPasswordClose
                                }
                                handlePopupClose={this.handlePopupClose}
                                errors={errors}
                                showSignUp={showSignUp}
                                showForgotPassword={showForgotPassword}
                                showPopup={showPopup}
                            />
                        }
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default LoginSignUp;
