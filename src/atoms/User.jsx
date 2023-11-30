import React from 'react'
import './styles/User.css'

function User(props) {
  return (
    <div className='usuario'>
      <p>{props.use}</p>
      <img src={props.imgUrl}></img>
    </div>
  )
}

export default User
