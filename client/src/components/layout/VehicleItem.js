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
          <div className="col-4">
            <img
              src={vehicle.image}
              alt={`${vehicle.title}`}
              className="img-thumbnail"
            />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>{vehicle.data.name}</h3>
            <p>
              type: <span>{vehicle.data.type}</span>
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
