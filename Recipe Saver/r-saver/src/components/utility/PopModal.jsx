import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

class PopupModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {this.props.content}
                    <Button
                        variant="secondary"
                        onClick={this.props.handleClose}
                    >
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        );
    }
}

export default PopupModal;
