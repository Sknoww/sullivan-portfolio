import React, { Component } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";

//CSS
import "../../../css/fullRecipeModal.css";

class FullRecipeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.generateIngredientRows = this.generateIngredientRows.bind(this);
        this.generateStepRows = this.generateStepRows.bind(this);
    }

    generateIngredientRows() {
        const { recipe } = this.props;
        let rows = [];
        for (let i = 0; i < recipe.ingredients.length; i++) {
            rows.push(
                <Row
                    className="fullRecipeModalIngredient"
                    key={"ingredient-" + i}
                >
                    - {recipe.ingredients[i]}
                </Row>
            );
        }
        return rows;
    }

    generateStepRows() {
        const { recipe } = this.props;
        let rows = [];
        for (let i = 0; i < recipe.steps.length; i++) {
            rows.push(
                <Row className="fullRecipeModalStep" key={"step-" + i}>
                    {i + 1}. {recipe.steps[i]}
                </Row>
            );
        }
        return rows;
    }

    render() {
        const { recipe } = this.props;
        return (
            <Modal
                className="fullRecipeModal"
                show={this.props.show}
                onHide={this.props.handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="modalLabel">
                        {recipe.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="fullRecipeBody">
                        <Row className="fullRecipeModalRow">
                            <h4 className="fullRecipeTitle">
                                Description:{" "}
                                <span className="fullRecipeValue">
                                    {recipe.description}
                                </span>
                            </h4>
                            <h4 className="fullRecipeTitle">
                                Yield:{" "}
                                <span className="fullRecipeValue">
                                    {recipe.yieldAmount}
                                </span>
                            </h4>
                        </Row>
                        <Row className="fullRecipeModalRow">
                            <h4 className="fullRecipeTitle linkTitle">
                                Link:{" "}
                                <a
                                    className="fullRecipeLinkValue"
                                    href={recipe.link}
                                    style={{ fontSize: "20px" }}
                                >
                                    {recipe.name}
                                </a>
                            </h4>
                        </Row>
                        <Row className="fullRecipeModalIngSteps">
                            <Col className="fullRecipeModalColIngredients">
                                <h4 style={{ fontWeight: "bold" }}>
                                    Ingredients
                                </h4>
                                {this.generateIngredientRows()}
                            </Col>
                            <Col className="fullRecipeModalColSteps">
                                <h4 style={{ fontWeight: "bold" }}>Steps</h4>
                                {this.generateStepRows()}
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={this.props.handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default FullRecipeModal;
