import React, { Component } from "react";

class SecondayContainer extends Component {
    render() {
        const { body } = this.props;
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                {body}
            </div>
        );
    }
}

export default SecondayContainer;
