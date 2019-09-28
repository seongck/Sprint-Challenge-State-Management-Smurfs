import React, { useState } from "react";
import { connect } from "react-redux";

import { postSmurf } from "../actions";

const SmurfForm = props => {
  const [formData, setFormData] = useState({});

  const handleNameChanges = e => {
    setFormData({
      ...formData,
      name: e.target.value
    });
  };

  const handleAgeChanges = e => {
    setFormData({
      ...formData,
      age: Number(e.target.value)
    });
  };

  const handleHeightChanges = e => {
    setFormData({
      ...formData,
      height: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurf({ ...formData, id: props.smurfs.length });
    setFormData({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNameChanges}
          placeholder="Name"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleAgeChanges}
          placeholder="Age"
        />
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleHeightChanges}
          placeholder="Height"
        />
        <button>Add Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfListReducer.smurfs,
    isPosting: state.smurfFormReducer.isPosting,
    error: state.smurfFormReducer.error
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(SmurfForm);
