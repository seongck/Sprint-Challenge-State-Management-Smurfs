import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const POST_SMURF_START = "POST_SMURFS_START";
export const POST_SMURF_FAIL = "POST_SMURFS_FAIL";
export const POST_SMURF_SUCCESS = "POST_SMURFS_SUCCESS";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("reducers/index.js: axios.get res.data: ", res.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err.message }));
};

export const postSmurf = smurfData => (dispatch) => {
    dispatch({ type: POST_SMURF_START });
    console.log("actions/index.js:postSmurf:smurfData: ", smurfData);
    axios
      .post("http://localhost:3333/smurfs", smurfData)
      .then(res => {
        console.log("reducers/index.js: post res: ", res);
        dispatch({ type: POST_SMURF_SUCCESS, payload: res });
      })
      .catch(err => dispatch({ type: POST_SMURF_FAIL, payload: err }));
};
