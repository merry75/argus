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
} from "../actions/types";

let initialState = {
  vehicles: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICLES_REQUEST || ADD_VEHICLE_REQUEST || EDIT_VEHICLE_REQUEST || DELETE_VEHICLE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_VEHICLES_ERROR || ADD_VEHICLE_ERROR || EDIT_VEHICLE_ERROR || DELETE_VEHICLE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case GET_VEHICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicles: action.vehicles
      };
    case ADD_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicles: [...state.vehicles, action.vehicle]
      }
    case EDIT_VEHICLE_SUCCESS:
      const foundIndex1 = state.vehicles.findIndex(vehicle => vehicle.data._id === action.vehicle.data._id);
      if (foundIndex1 > -1) {
        state.vehicles[foundIndex1] = action.vehicle;
      }
      return {
        ...state,
        loading: false,
      }
    case DELETE_VEHICLE_SUCCESS:
      let removedArray = state.vehicles;
      const foundIndex2 = state.vehicles.findIndex(vehicle => vehicle.data._id === action.id);
      if (foundIndex2 > -1) {
        removedArray.splice(foundIndex2, 1);
      }
      return {
        ...state,
        loading: false,
        vehicles: removedArray
      }
    default:
      return state;
  }
}
