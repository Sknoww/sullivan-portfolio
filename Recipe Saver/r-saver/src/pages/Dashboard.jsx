import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import DashboardBody from "../components/bundles/dashboard/DashboardBody";
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFullRecipe: false,
        };
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        const { user } = this.props;
        if (Object.entries(user).length === 0) {
            this.props.history.push("/Login");
        } else {
            user.logout()
                .then((response) => {
                    console.log("User logged out");
                    this.props.handleLogout();
                    this.props.history.push("/Login");
                })
                .catch((error) => {
                    console.log("Failed to logout user: %o", error);
                    throw error;
                });
        }
    }

    handleShowFullRecipe = () => {
        console.log("TEST");
        this.setState({
            showFullRecipe: true,
        });
    };

    handleCloseFullRecipe = () => {
        this.setState({
            showFullRecipe: false,
        });
    };

    render() {
        const { user } = this.props;
        let name = "";
        try {
            name = user.user_metadata.full_name;
        } catch (e) {}
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer
                        header={name + "'s Dashboard"}
                        logoutUser={this.logoutUser}
                        body={
                            <DashboardBody
                                user={this.props.user}
                                name={name}
                                recipes={this.props.recipes}
                                show={this.state.showFullRecipe}
                                handleShow={this.handleShowFullRecipe}
                                handleClose={this.handleCloseFullRecipe}
                            />
                        }
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default Dashboard;
