import React from "react";

const ClientDataController = (props) => {
    // Admin mandate
    const showClientsCount = async () => {
        const settings = {
          headers:{
            "Authorization": "Bearer " + props.token
          }
        };

        const response = await fetch(`http://localhost:5000/admin/${props.loggedInUserID}/count`, settings);

        console.log("admin ID", props.loggedInUserID)

        const clientsData = await response.json();

        try{
          if(response.ok){
            alert(`LisaConsult has ${clientsData.count}`);
          } else {
            throw new Error(clientsData.message)
          }
        }catch(err){
          alert(err.message)
        }
    };

  return (
    <div className="admin">
      <button onClick={showClientsCount} className="admin-btn"> Admin C&E </button>
    </div>
  );
};

export default ClientDataController;
