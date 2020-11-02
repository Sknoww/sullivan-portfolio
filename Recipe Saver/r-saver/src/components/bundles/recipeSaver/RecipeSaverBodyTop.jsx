import React, { Component } from "react";
import { Form } from "react-bootstrap";

import "../../../css/RecipeSaver.css";

class RecipeSaverBodyTop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { name, description, yieldAmount, link } = this.props;
        return (
            <div className="inputFieldsBodyTop">
                <div className="columnBodyTop">
                    <Form>
                        <Form.Group className="inputField">
                            <Form.Label className="inputLabel">
                                Recipe Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter recipe name"
                                value={name}
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="inputField">
                            <Form.Label className="inputLabel">
                                Recipe Description
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Enter recipe description"
                                value={description}
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div className="columnBodyTop">
                    <Form>
                        <Form.Group className="inputField">
                            <Form.Label className="inputLabel">
                                Recipe Yield
                            </Form.Label>
                            <Form.Control
                                type="number"
                                name="yieldAmount"
                                placeholder="Enter recipe yield"
                                value={yieldAmount}
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="inputField">
                            <Form.Label className="inputLabel">
                                Recipe Link
                            </Form.Label>
                            <Form.Control
                                type="url"
                                name="link"
                                placeholder="Enter recipe link"
                                value={link}
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
    }
}

export default RecipeSaverBodyTop;
