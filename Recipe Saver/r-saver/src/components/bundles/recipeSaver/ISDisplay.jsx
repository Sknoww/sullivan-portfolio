import React, { Component } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

class ISDisplay extends Component {
    render() {
        const { ingredients, steps } = this.props;

        if (this.props.type === "Ingredient") {
            return ingredients.map((val, idx) => {
                return (
                    <Form
                        name={this.props.type}
                        key={idx}
                        onSubmit={this.props.handleSubtractItem}
                    >
                        <InputGroup className="mb-3">
                            <Form.Control
                                className={this.props.type}
                                type="text"
                                value={ingredients[idx]}
                                disabled={true}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary" type="submit">
                                    -
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                );
            });
        } else {
            return steps.map((val, idx) => {
                return (
                    <Form
                        name={this.props.type}
                        key={idx}
                        onSubmit={this.props.handleSubtractItem}
                    >
                        <InputGroup className="mb-3">
                            <Form.Control
                                className={this.props.type}
                                type="text"
                                value={steps[idx]}
                                disabled={true}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-primary" type="submit">
                                    -
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                );
            });
        }
    }
}

export default ISDisplay;
