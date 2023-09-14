import React from 'react'

const CreateMessage = ({createMessage}) => {
  return (
    <div className={`create__message--container ${createMessage ? "close--create": ""}`} >
    <h3>User create</h3>
</div>
  )
}

export default CreateMessage