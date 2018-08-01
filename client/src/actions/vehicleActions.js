import axios from "axios";
import { API_URL } from "../config";

import {
  GET_VEHICLES_REQUEST,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_ERROR,
  ADD_VEHICLE_REQUEST,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_ERROR,
  EDIT_VEHICLE_REQUEST,
  EDIT_VEHICLE_SUCCESS,
  EDIT_VEHICLE_ERROR,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_ERROR
} from "./types";

export const getVehiclesRequest = () => ({
  type: GET_VEHICLES_REQUEST
});

export const getVehiclesSuccess = vehicles => ({
  type: GET_VEHICLES_SUCCESS,
  vehicles
});

export const getVehiclesError = error => ({
  type: GET_VEHICLES_ERROR,
  error
});

export const addVehicleRequest = () => ({
  type: ADD_VEHICLE_REQUEST
});

export const addVehicleSuccess = vehicle => ({
  type: ADD_VEHICLE_SUCCESS,
  vehicle
});

export const addVehicleError = error => ({
  type: ADD_VEHICLE_ERROR,
  error
});

export const editVehicleRequest = () => ({
  type: EDIT_VEHICLE_REQUEST
});

export const editVehicleSuccess = vehicle => ({
  type: EDIT_VEHICLE_SUCCESS,
  vehicle
});

export const editVehicleError = error => ({
  type: EDIT_VEHICLE_ERROR,
  error
});

export const deleteVehicleRequest = () => ({
  type: DELETE_VEHICLE_REQUEST
});

export const deleteVehicleSuccess = id => ({
  type: DELETE_VEHICLE_SUCCESS,
  id
});

export const deleteVehicleError = error => ({
  type: DELETE_VEHICLE_ERROR,
  error
});

export const getVehicles = () => dispatch => {
  dispatch(getVehiclesRequest());
  axios
    .get(`${API_URL}/`)
    .then(response => {
      console.log("test get actions", response.data);
      //response or response.json()
      return response.data;
    })
    .then(vehicles => {
      dispatch(getVehiclesSuccess(vehicles));
    })
    .catch(error => {
      dispatch(getVehiclesError(error));
    });
};

export const addVehicle = (name, type) => dispatch => {
  dispatch(addVehicleRequest());
  axios
    .post(`${API_URL}/`, { name, type })
    .then(response => {
      return response.data;
    })
    .then(vehicle => {
      dispatch(addVehicleSuccess(vehicle));
    })
    .catch(error => {
      dispatch(addVehicleError(error));
    });
};

export const editVehicle = (id, name, type) => dispatch => {
  dispatch(editVehicleRequest());
  axios
    .put(`${API_URL}/${id}`, { name, type })
    .then(response => {
      return response.data;
    })
    .then(vehicle => {
      console.log(vehicle);
      dispatch(editVehicleSuccess(vehicle));
    })
    .catch(error => {
      dispatch(editVehicleError(error));
    });
};

export const deleteVehicle = id => dispatch => {
  dispatch(deleteVehicleRequest());
  axios
    .delete(`${API_URL}/${id}`)
    .then(response => {
      dispatch(deleteVehicleSuccess(id));
    })
    .catch(error => {
      dispatch(deleteVehicleError(error));
    });
};
