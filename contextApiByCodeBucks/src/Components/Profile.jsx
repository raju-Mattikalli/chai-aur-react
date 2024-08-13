import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);
  console.log("Profile data :"+user)


    if(user){
      return <span className='text-white'>{user.name}</span>
    }
    else{
      return <span>Login</span>
    }

}

export default Profile