import React, { Component } from "react";
import RecipeSaverBodyTop from "./RecipeSaverBodyTop";
import RecipeSaverBodyBottom from "./RecipeSaverBodyBottom";

//Css
import "../../../css/RecipeSaver.css";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
        }}
    />
);

class RecipeSaverBody extends Component {
    render() {
        const {
            name,
            description,
            yieldAmount,
            link,
            ingredients,
            steps,
        } = this.props;

        if (this.props.userLoggedIn) {
            return (
                <React.Fragment>
                    <div className="rowRecipeSaverTop">
                        <div className="header">
                            {
                                <RecipeSaverBodyTop
                                    name={name}
                                    description={description}
                                    yieldAmount={yieldAmount}
                                    link={link}
                                    handleChange={this.props.handleChange}
                                />
                            }
                        </div>
                        <div>{<ColoredLine color="#ff526a" />}</div>
                        <div className="inputFieldsBodyBottom">
                            <div className="columnBodyTop">
                                <RecipeSaverBodyBottom
                                    type="Ingredient"
                                    ingredients={ingredients}
                                    steps={steps}
                                    handleChange={this.props.handleChange}
                                    handleAddItem={this.props.handleAddItem}
                                    handleSubtractItem={
                                        this.props.handleSubtractItem
                                    }
                                />
                            </div>
                            <div className="columnBodyTop">
                                <RecipeSaverBodyBottom
                                    type="Step"
                                    ingredients={ingredients}
                                    steps={steps}
                                    handleChange={this.props.handleChange}
                                    handleAddItem={this.props.handleAddItem}
                                    handleSubtractItem={
                                        this.props.handleSubtractItem
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return <div></div>;
        }
    }
}

export default RecipeSaverBody;
