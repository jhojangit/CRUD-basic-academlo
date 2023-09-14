import "./userCard.css";


const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormClose, setDeleteMessage, }) => {

  const handleDelete = () => {
    deleteUserById(user.id)
    deleteMs()
  }

  const deleteMs = () =>{
    setDeleteMessage(false)
    setTimeout(() => {
          setDeleteMessage(true)
    }, 3000);
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }



  const handleOpenForm = () =>{
    setFormClose(false)
  }

  return (
    <article className="user">
      <h2 className="user__name">{user.first_name} {user.last}</h2>
      <ul className="user__list">
        <li className="user__item"><span className="user__label">Email</span> <br /> {user.email}<span className="user__value"></span></li>
        <li className="user__item"><span className="user__label">Birthday</span> <br /> {user.birthday}<span className="user__value"></span></li>
      </ul>
      <footer className="user__footer">
        
          <button className="user__btn user__delete btn__h" onClick={handleDelete}><i className='bx bx-trash'></i></button>
          <button  className="user__btn user__update btn__h" onClick={handleUpdate} ><i className='bx bx-edit-alt'></i></button>
        
      </footer>
    </article>
  )
}

export default UserCard