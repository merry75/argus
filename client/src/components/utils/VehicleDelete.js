import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteVehicle } from "../../actions/vehicleActions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class VehicleDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    // this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteVehicle(rule) {
    // console.log(this.props.vehicle);
    // console.log("-------------");
    // console.log(this.state.vehicles);
    // console.log("-------------");
    // this.setState(() => ({
    //   vehicles: this.props.vehicle.filter(v => v.id !== this.props.vehicle.id)
    // }));

    this.props.deleteVehicle(this.props.vehicle.data._id);

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          className="btn btn-md btn-info mr-2 btn-danger"
          onClick={() => this.toggle()}
        >
          {this.props.buttonLabel}Delete
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={() => this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.toggle()}>Delete Your Vehicle</ModalHeader>
          <ModalBody>
            <div>
              <h6>
                You are going to delete the vehicle: <br />{" "}
                <span className="del-vehicle-title">
                  {" "}
                  {this.props.vehicle.name} {this.props.vehicle.type}
                </span>{" "}
              </h6>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.deleteVehicle()}>
              Delete
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

const mapDispatchToProps = dispatch => ({
  deleteVehicle: data => dispatch(deleteVehicle(data))
});

export default connect(
  mapDispatchToProps,
  { deleteVehicle }
)(VehicleDelete);
