import React from "react";

const DeregisterClient = (props) => {
  return (
    <div className="deregister-client">
      <button onClick={props.deregisterClient}> Delete Account </button>
    </div>
  );
};

export default DeregisterClient;
