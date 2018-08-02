const mongoose = require("mongoose");
var timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;

//Create Schema
const VehicleSchema = new Schema({
  name: {
    type: String
  },
  type: {
    type: String,
    enum: ["SUV", "Truck", "Hybrid"]
  }
  // timestamps: {
  //   createdAt: "created_at"
  // }
});

VehicleSchema.plugin(timestamps);

VehicleSchema.methods.serialize = function() {
  return {
    id: this._id,
    name: this.name,
    type: this.type
    // timestamps: this.timestamps
  };
};

module.exports = Vehicle = mongoose.model("vehicles", VehicleSchema);
