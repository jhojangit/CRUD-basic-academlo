
import { useEffect, useState } from 'react'
import './App.css'
import './components/deleteMessage/delete.css'
import './components/updateMessage/updateMessage.css'
import './components/createMessage/create.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/userCard/UserCard'
import FormUser from './components/formUser/FormUser'
import DeleteMessage from './components/deleteMessage/DeleteMessage'
import UpdateMessage from './components/updateMessage/UpdateMessage'
import CreateMessage from './components/createMessage/CreateMessage'
import Loading from './components/loading/Loading'


function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true);
  const [createMessage, setCreateMessage] = useState(true);
  const [deleteMessage, setDeleteMessage] = useState(true);
  const [updateMessage, setUpdateMessage] = useState(true);

  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()


  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () =>{
    setFormClose(false)
  }



  return (
    <div className="App">


      {<CreateMessage createMessage={createMessage} />}
      {<DeleteMessage deleteMessage={deleteMessage} />}
      {<UpdateMessage updateMessage={updateMessage} />}

      <header>
        <h1>Users CRUD</h1>
        <button onClick={handleOpenForm}>Create user</button>
        
      </header>

        <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
        setUpdateMessage={setUpdateMessage}
        setCreateMessage={setCreateMessage}
      />
      
      <div className='user__container'>
        { !users 

          ?  <Loading/>
          
          : users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
              setDeleteMessage={setDeleteMessage}
            />

          ))
          
        }

      </div>

    </div>
  )
}

export default App
