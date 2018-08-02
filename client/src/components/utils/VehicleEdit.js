import React, { Component } from "react";
import { connect } from "react-redux";
import { editVehicle } from "../../actions/vehicleActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class VehicleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      type: ""
    };

    // this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      name: this.props.vehicle.name,
      type: this.props.vehicle.type
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleTypeChange(e) {
    this.setState({ type: e.target.value });
  }

  onEdit() {
    if (
      this.state.type !== "SUV" &&
      this.state.type !== "Hybrid" &&
      this.state.type !== "Truck"
    ) {
      return;
    }
    this.props.editVehicle(
      this.props.vehicle._id,
      this.state.name,
      this.state.type
    );

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          className="btn btn-md btn-info mr-2"
          onClick={() => this.toggle()}
        >
          {this.props.buttonLabel}Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={() => this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.toggle()}>
            Edit Your Vehicle
          </ModalHeader>
          <ModalBody>
            <form>
              <label htmlFor="car-name">Name </label>
              <input
                className="form-control"
                type="text"
                onChange={e => this.handleNameChange(e)}
                value={this.state.name}
                name="car-name"
                id="car-name"
              />
              <label htmlFor="car-type">Type </label>
              <input
                className="form-control"
                type="text"
                onChange={e => this.handleTypeChange(e)}
                value={this.state.type}
                name="car-type"
                id="car-type"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.onEdit()}>
              Edit
            </Button>{" "}
            <Button color="secondary" onClick={() => this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { editVehicle }
)(VehicleEdit);
