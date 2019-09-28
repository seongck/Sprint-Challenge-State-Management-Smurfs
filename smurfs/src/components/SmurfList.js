import React from "react";

function SmurfList(props) {
  return (
    <div>
      <h2>Smurf List</h2>
      {props.smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SmurfList;
