export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const POST_SMURFS_START = "POST_SMURFS_START";
export const POST_SMURFS_FAIL = "POST_SMURFS_FAIL";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";

export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_SMURFS_START });
    fetch('http://localhost:3333/smurfs')
      .then( res => res.json())
      .then( res => {
        console.log('reducers/index.js: fetch res: ', res);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res });
      })
      .catch( err => dispatch({ type: FETCH_SMURFS_FAIL, payload: err })
      );
  }
}
