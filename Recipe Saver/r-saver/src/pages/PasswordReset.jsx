import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import PasswordResetBody from "../components/bundles/login/PasswordResetBody";

//this.props.match.params.token
class PasswordReset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordConfirmation: "",
            errors: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordReset = this.handlePasswordReset.bind(this);
        this.comparePasswords = this.comparePasswords.bind(this);
        this.recoverUserWithToken = this.recoverUserWithToken.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    }

    handlePasswordReset(e) {
        e.preventDefault();
        if (this.comparePasswords()) {
            const user = this.props.auth.currentUser();
            user.update({ password: this.state.password })
                .then((user) => console.log("Updated user %s", user))
                .catch((error) => {
                    console.log("Failed to update user: %o", error);
                    throw error;
                });
            this.props.history.push("/Dashboard");
        } else {
            this.setState({
                errors: "Passwords do not match",
            });
        }
    }

    comparePasswords() {
        const { password, passwordConfirmation } = this.state;
        return password === passwordConfirmation;
    }

    recoverUserWithToken() {
        this.props.auth
            .recover(this.props.match.params.token, true)
            .then((response) =>
                console.log("Logged in as %s", JSON.stringify({ response }))
            )
            .catch((error) =>
                console.log("Failed to verify recover token: %o", error)
            );
    }

    componentDidMount() {
        this.recoverUserWithToken();
    }

    render() {
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer
                        header="Password Reset"
                        body={
                            <PasswordResetBody
                                handleChange={this.handleChange}
                                handlePasswordReset={this.handlePasswordReset}
                                errors={this.state.errors}
                            />
                        }
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default PasswordReset;
