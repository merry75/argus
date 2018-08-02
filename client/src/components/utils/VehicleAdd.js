import React, { Component } from "react";
import { connect } from "react-redux";
import { addVehicle } from "../../actions/vehicleActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class VehicleAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      type: ""
    };

    // this.toggle = this.toggle.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleTypeChange(e) {
    this.setState({ type: e.target.value });
  }

  onAdd() {
    this.props.addVehicle(this.state.name, this.state.type);
    this.toggle();
    this.setState({
      name: "",
      type: ""
    });
  }

  render() {
    return (
      <div>
        <Button
          className="btn btn-md btn-info mr-2"
          onClick={() => this.toggle()}
        >
          {this.props.buttonLabel}Add a Vehicle
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={() => this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.toggle()}>Add a Vehicle</ModalHeader>
          <ModalBody>
            <form>
              <div>
                <label htmlFor="car-name">Name </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={e => this.handleNameChange(e)}
                  value={this.state.name}
                  name="car-name"
                  id="car-name"
                />
              </div>
              <div>
                <label htmlFor="car-type">Type </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={e => this.handleTypeChange(e)}
                  value={this.state.type}
                  name="car-type"
                  id="car-type"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.onAdd()}>
              Add
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
  { addVehicle }
)(VehicleAdd);
