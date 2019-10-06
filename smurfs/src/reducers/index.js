import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURF_START,
  POST_SMURF_FAIL,
  POST_SMURF_SUCCESS
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case POST_SMURF_START:
      return {
        ...state,
        isPosting: true
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isPosting: false,
        error: ""
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isPosting: false
      };
    default:
      return state;
  }
};

export default smurfReducer;
