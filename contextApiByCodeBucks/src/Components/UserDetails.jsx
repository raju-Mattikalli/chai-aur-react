import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'




function UserDetails() {

    const {user , userData} = useContext(UserContext);
  console.log("Profile data :"+user)
  if(user){
    return <div className='flex items-center justify-center min-h-screen'>
    <section className="user-details">
        <h1>User Details </h1>
        <h2 >username: {user.name}</h2>
        <h2>userId: {user.id}</h2>
        <h2>user Email: {user.email}</h2>
        <h2>user Phone number: {user.phone}</h2>
        <button className='btn btn-primary text-green-600 bg-gray-600 border-purple-700 px-4 py-2 rounded-3xl' onClick={() => userData(Math.floor(Math.random() * 10) + 1)}>
                Fetch Random User
            </button>

    </section>
    </div>

    
  }
  else{
    return <h2>User not found</h2>
}
}

export default UserDetails