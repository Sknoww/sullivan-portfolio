import React, { Component } from "react";
import SecondayContainer from "./SecondaryContainer";
import { Card, Button } from "react-bootstrap";

//Css
import "../../../css/welcome.css";

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.handleLoginReRoute = this.handleLoginReRoute.bind(this);
        this.handleHeaderButtons = this.handleHeaderButtons.bind(this);
    }

    handleLoginReRoute() {
        this.props.history.push("/Login");
    }

    handleHeaderButtons() {
        const { header, userLoggedIn } = this.props;
        if (header === "Recipe Saver" && userLoggedIn) {
            return (
                <Button
                    className="saveButtonRS"
                    onClick={this.props.handleSubmit}
                >
                    Save
                </Button>
            );
        } else if (header === "Recipe Saver" && !userLoggedIn) {
            return (
                <div className="loginButtonAndLabelRS">
                    <p className="loginButtonLabelRS">Please login</p>
                    <Button
                        className="loginButtonRS"
                        onClick={this.handleLoginReRoute}
                    >
                        Login
                    </Button>
                </div>
            );
        } else if (header.includes("Dashboard")) {
            return (
                <Button
                    className="logoutButtonDashboard"
                    onClick={this.props.logoutUser}
                >
                    Logout
                </Button>
            );
        } else {
            return null;
        }
    }

    render() {
        const { header, body } = this.props;

        return (
            <div className="mainDiv">
                <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.80)" }}>
                    <Card.Header className="welcomeHeader">
                        {header}
                        {this.handleHeaderButtons()}
                    </Card.Header>
                    <Card.Body>
                        <SecondayContainer body={body} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MainContainer;
