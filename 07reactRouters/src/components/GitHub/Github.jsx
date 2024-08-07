import React, { useEffect } from 'react'

function Github() {
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")


        .then(response =>response.json())
        .then(data => console.log(data))
    },[])
  return (
    <div>Github: </div>
  )
}

export default Github