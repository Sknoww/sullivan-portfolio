import React, { Component } from "react";
import { Row } from "react-bootstrap";

//CSS
import "../../../css/dashboard.css";
import RecipeTable from "./RecipeTable";

class DashboardBody extends Component {
    render() {
        return (
            <div className="dashboardBody">
                <Row>
                    <div className="dashboardInfo">
                        <h2 className="dashboardHeader">My Info</h2>
                        <h6 className="dashboardNameHeader">
                            {"Name: "}
                            <span className="dashboardName">
                                {this.props.name}
                            </span>
                        </h6>
                        <h6 className="dashboardEmailHeader">
                            {"Email: "}{" "}
                            <span className="dashboardEmail">
                                {this.props.user.email}
                            </span>
                        </h6>
                    </div>
                </Row>
                <Row>
                    <RecipeTable
                        recipes={this.props.recipes}
                        show={this.props.show}
                        handleClose={this.props.handleClose}
                        handleShow={this.props.handleShow}
                    />
                </Row>
            </div>
        );
    }
}

export default DashboardBody;
