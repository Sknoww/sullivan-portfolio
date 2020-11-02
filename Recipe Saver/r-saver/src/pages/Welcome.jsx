import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";

class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer header="Welcome to Recipe Saver!" />
                </main>
            </React.Fragment>
        );
    }
}

export default Welcome;
