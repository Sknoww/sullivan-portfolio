import React, { Component } from "react";
import ISDisplay from "./ISDisplay";
import ISInput from "./ISInput";

//CSS
import "../../../css/RecipeSaver.css";

class RecipeSaverBodyBottom extends Component {
    render() {
        const { type } = this.props;
        const { ingredients, steps } = this.props;
        return (
            <div className="ingredientAndStepInput">
                <ISInput
                    handleChange={this.props.handleChange}
                    type={type}
                    handleAddItem={this.props.handleAddItem}
                />
                <ISDisplay
                    ingredients={ingredients}
                    steps={steps}
                    type={type}
                    handleSubtractItem={this.props.handleSubtractItem}
                />
            </div>
        );
    }
}

export default RecipeSaverBodyBottom;
