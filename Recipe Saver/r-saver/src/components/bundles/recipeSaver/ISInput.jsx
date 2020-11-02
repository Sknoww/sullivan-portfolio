import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class ISInput extends Component {
    render() {
        return (
            <Form name={this.props.type} onSubmit={this.props.handleAddItem}>
                <Form.Label style={{ color: "#ff465f" }}>
                    {"Enter " + this.props.type + "s"}
                </Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        name={"current" + this.props.type}
                        onChange={this.props.handleChange}
                        className={this.props.type}
                        placeholder={"Enter " + this.props.type}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit">
                            +
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    }
}

export default ISInput;
