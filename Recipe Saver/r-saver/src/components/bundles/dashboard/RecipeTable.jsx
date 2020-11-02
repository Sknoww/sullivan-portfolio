import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FullRecipeModal from "../dashboard/FullRecipeModal";
//CSS
import "../../../css/recipeTable.css";

class RecipeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: props.recipes,
            data: [
                {
                    id: 1,
                    date: "2014-04-18",
                    total: 121.0,
                    status: "Shipped",
                    name: "A",
                    points: 5,
                    percent: 50,
                },
                {
                    id: 2,
                    date: "2014-04-21",
                    total: 121.0,
                    status: "Not Shipped",
                    name: "B",
                    points: 10,
                    percent: 60,
                },
                {
                    id: 3,
                    date: "2014-08-09",
                    total: 121.0,
                    status: "Not Shipped",
                    name: "C",
                    points: 15,
                    percent: 70,
                },
                {
                    id: 4,
                    date: "2014-04-24",
                    total: 121.0,
                    status: "Shipped",
                    name: "D",
                    points: 20,
                    percent: 80,
                },
                {
                    id: 5,
                    date: "2014-04-26",
                    total: 121.0,
                    status: "Shipped",
                    name: "E",
                    points: 25,
                    percent: 90,
                },
            ],
            expandedRow: "",
        };
    }

    handleRowClick(rowId) {
        const currentExpandedRow = this.state.expandedRow;
        const isRowCurrentlyExpanded = currentExpandedRow === rowId;
        const newExpandedRow = isRowCurrentlyExpanded ? "" : rowId;
        this.setState({ expandedRow: newExpandedRow });
    }

    renderRecipe(recipe) {
        const clickCallback = () => this.handleRowClick(recipe.name);
        const itemRows = [
            <tr
                className="tablePreviewContainer"
                key={"row-data-" + recipe.name}
            >
                <td
                    className="recipePreviewInTable"
                    onClick={clickCallback}
                    key={"row-data-" + recipe.name}
                >
                    {recipe.name}
                </td>
            </tr>,
        ];

        if (this.state.expandedRow === recipe.name) {
            itemRows.push(
                <tr
                    className="expandedRecipe"
                    key={"row-expanded-" + recipe.name}
                >
                    <tr className="desYieldRow">
                        <td className="descriptionExpandedRecipe">
                            <span>Description: </span>
                            {recipe.description}
                        </td>
                        <td className="yieldExpandedRecipe">
                            <span>Yield: </span>
                            {recipe.yieldAmount}
                        </td>
                    </tr>
                    <tr>
                        <td className="linkExpandedRecipe">
                            <span>Link: </span>
                            <a
                                style={{ color: "azure" }}
                                href={recipe.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {recipe.name}
                            </a>
                        </td>
                    </tr>
                    <Button
                        className="viewFullRecipeButton btn-success"
                        onClick={this.props.handleShow}
                    >
                        View Full Recipe
                    </Button>
                    <FullRecipeModal
                        show={this.props.show}
                        handleClose={this.props.handleClose}
                        recipe={recipe}
                    />
                </tr>
            );
        }

        return itemRows;
    }

    render() {
        let allItemRows = [];
        this.props.recipes.forEach((recipe) => {
            const perItemRows = this.renderRecipe(recipe);
            allItemRows = allItemRows.concat(perItemRows);
        });

        return (
            <table
                className="recipeTable"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <thead>
                    <tr>
                        <th className="dashboardRecipes">My Recipes</th>
                    </tr>
                </thead>

                <tbody className="recipeTableBody">{allItemRows}</tbody>
            </table>
        );
    }
}

export default RecipeTable;
