import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {addUser, deleteUser, updateUserName} from './features/Users'

function App() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("")
  const [newUserName, setNewUserName] = useState("")

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)

  return (
    <div className='App'>
      <div className='addUser'>
        <input type="text" placeholder='Name...' onChange={(event) => {setName(event.target.value)}}
        />
        <input type="text" placeholder='Username...' onChange={(event) => {setUserName(event.target.value)}}
        />
        <button onClick={() => {dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username}))}}>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div key={user.id}>
               <h1> {user.name} </h1>
               <h1> {user.username} </h1>
               <input type="text" 
               placeholder='New Username'
               onChange={(event) => {
                setNewUserName(event.target.value);
               }}
               />
               <button onClick={() => {
                dispatch(updateUserName({ id: user.id, username: newUserName }));
               }}>Update Username</button>
               <button onClick={() => {
                dispatch(deleteUser({ id: user.id}))
               }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
