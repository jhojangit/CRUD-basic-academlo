import React from 'react'

const UpdateMessage = ({updateMessage}) => {
  return (
    <div className={`update__message--container ${updateMessage ? "close--update": ""}`} >
            <h3>User update</h3>
    </div>
  )
}

export default UpdateMessage