import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function About() {
    const {userid} = useParams()

  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>About : {userid}</div>
  )
}

export default About