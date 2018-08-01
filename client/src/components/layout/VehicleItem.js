import React, { Component } from "react";
import PropTypes from "prop-types";
import VehicleEdit from "../utils/VehicleEdit";
import VehicleDelete from "../utils/VehicleDelete";

class VehicleItem extends Component {
  render() {
    const { vehicle } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{vehicle.name}</h3>
            <p>
              type: <span>{vehicle.type}</span>
            </p>
            <div className="btn-group">
              <VehicleEdit vehicle={vehicle} />
              <VehicleDelete vehicle={vehicle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VehicleItem.propTypes = {
  vehicle: PropTypes.object.isRequired
};

export default VehicleItem;
