import React from 'react'

const DeleteMessage = ({deleteMessage}) => {
  return (
    <div className={`delete__message--container ${deleteMessage ? "close--delete": ""}`} >
            <h3>User delete</h3>
    </div>
  )
}

export default DeleteMessage