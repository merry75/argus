import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVehicles } from "../../actions/vehicleActions";
import VehicleItem from "./VehicleItem";
import VehicleAdd from "../utils/VehicleAdd";

class Library extends Component {
  componentDidMount() {
    this.props.getVehicles();
  }

  render() {
    const { vehicles } = this.props;
    let vehicleItem;
    if (vehicles.vehicles.length > 0) {
      vehicleItem = vehicles.vehicles.map(vehicle => (
        <VehicleItem key={vehicle.data._id} vehicle={vehicle} />
      ));
    }
    return (
      <div className="vehicles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Vehicle Library</h1>
              <div className="lead text-cent">
                <VehicleAdd />
              </div>
              {vehicleItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Library.propTypes = {
  getVehicles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  vehicles: state.vehicles
});

export default connect(
  mapStateToProps,
  { getVehicles }
)(Library);
