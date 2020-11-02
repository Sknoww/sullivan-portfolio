import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import RecipeSaverBody from "../components/bundles/recipeSaver/RecipeSaverBody";

//CSS
import "../css/RecipeSaver.css";

class RecipeSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            yieldAmount: "",
            link: "",
            currentIngredient: "",
            ingredients: [],
            currentStep: "",
            steps: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleSubtractItem = this.handleSubtractItem.bind(this);
    }

    handleSubmit() {
        const recipe = {
            name: this.state.name,
            description: this.state.description,
            yieldAmount: this.state.yieldAmount,
            link: this.state.link,
            ingredients: this.state.ingredients,
            steps: this.state.steps,
        };
        this.props.handleRecipeUpdate(recipe);
        this.setState({
            name: "",
            description: "",
            yieldAmount: "",
            link: "",
            currentIngredient: "",
            ingredients: [],
            currentStep: "",
            steps: [],
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleAddItem(e) {
        e.preventDefault();
        const type = e.target.name;
        console.log("ADDING");
        const {
            ingredients,
            currentIngredient,
            steps,
            currentStep,
        } = this.state;
        if (type === "Ingredient") {
            ingredients.push(currentIngredient);
            this.setState({
                ingredients: ingredients,
            });
        } else {
            steps.push(currentStep);
            this.setState({
                steps: steps,
            });
        }
        e.target.querySelector("." + type).value = "";
    }

    handleSubtractItem(e) {
        e.preventDefault();
        const type = e.target.name;
        const itemToFind = e.target.querySelector("." + type).value;
        console.log("SUBTRACTING");
        const { ingredients, steps } = this.state;
        if (type === "Ingredient") {
            const removeIndex = ingredients
                .map(function (ingredient) {
                    return ingredient.ingredient;
                })
                .indexOf(itemToFind);
            ingredients.splice(removeIndex, 1);
            this.setState((prevState) => ({
                ingredients: ingredients,
            }));
        } else {
            const removeIndex = steps
                .map(function (step) {
                    return step.step;
                })
                .indexOf(itemToFind);
            steps.splice(removeIndex, 1);
            this.setState((prevState) => ({
                steps: steps,
            }));
        }
    }

    render() {
        const {
            name,
            description,
            yieldAmount,
            link,
            ingredients,
            steps,
        } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <MainContainer
                        {...this.props}
                        header="Recipe Saver"
                        handleSubmit={this.handleSubmit}
                        userLoggedIn={this.props.userLoggedIn}
                        body={
                            <RecipeSaverBody
                                name={name}
                                description={description}
                                yieldAmount={yieldAmount}
                                link={link}
                                ingredients={ingredients}
                                steps={steps}
                                userLoggedIn={this.props.userLoggedIn}
                                handleChange={this.handleChange}
                                handleAddItem={this.handleAddItem}
                                handleSubtractItem={this.handleSubtractItem}
                            />
                        }
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeSaver;
