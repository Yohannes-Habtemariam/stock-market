import React from 'react'

const ClientLogout = (props) => {
  return (
    <div className="clientLogout">
      <button onClick={props.clientLogout}> Logout </button>
    </div>
  )
}

export default ClientLogout
