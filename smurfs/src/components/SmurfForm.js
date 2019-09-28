import React, { useState } from "react";

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
      age: e.target.value
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
    <>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onClick={handleNameChanges}
        />
        <input
          type="number"
          name="age"
          value={formData.name}
          onClick={handleAgeChanges}
        />
        <input
          type="text"
          name="name"
          value={formData.height}
          onClick={handleHeightChanges}
        />
        <button onSubmit={handleSubmit}></button>
      </form>
    </>
  );
};

export default SmurfForm;
