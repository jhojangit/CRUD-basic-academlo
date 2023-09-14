import "./formUser.css";
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import defaultValues from "../../utils/defaultValues"

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose, setUpdateMessage, setCreateMessage}) => {

  const { register, handleSubmit, reset } = useForm()



  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])

  const submit = data => {
    
    if (updateInfo) {
      updateUserById(updateInfo.id, data)
      setUpdateInfo() 

      setUpdateMessage(false)
      setTimeout(() => {
        setUpdateMessage(true)
      }, 3000);

    }  else {
      createNewUser(data)
      setCreateMessage(false)
    setTimeout(() => {
      setCreateMessage(true)
    }, 3000);
    } 
    reset(defaultValues)
  }




  const handleExit = () => {
    setFormClose(true)
  }

  return (
    <div className={`form__container ${formClose && "close"}`}>
      <form onSubmit={handleSubmit(submit)}>
        <span onClick={handleExit} className="x"> <i className='bx bxs-x-circle bx-sm'></i></span>
        <h3 className="h3__create">{updateInfo ? "Update user" : "Create new user"}</h3>
        
        <div>
          <label htmlFor="email">Email</label>
          <input  {...register('email')} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input {...register('first_name')} type="text" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input {...register('last_name')} type="text" id="last_name" />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input {...register('birthday')} type="date" id="birthday" />
        </div>
        <button onClick={handleExit} >{updateInfo ? 'Update' : 'Create'}</button>
      </form>
    </div>

  )
}

export default FormUser