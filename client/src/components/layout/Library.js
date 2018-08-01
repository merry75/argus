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
    // console.log("library", this.props.vehicles);
    let vehicleItem;
    if (vehicles.vehicles.length > 0) {
      // console.log("test to check if vehicles if populated correctly", vehicles);
      vehicleItem = vehicles.vehicles.map(vehicle => (
        <VehicleItem key={vehicle._id} vehicle={vehicle} />
      ));
    } else {
      vehicleItem = <h3>Loading...meanwhile chew some gums :)</h3>;
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
  getVehicles: PropTypes.func.isRequired,
  vehicles: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  vehicles: state.vehicles
});

export default connect(
  mapStateToProps,
  { getVehicles }
)(Library);
