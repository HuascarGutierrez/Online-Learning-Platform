import React from 'react'
import User from '../atoms/User'

import './styles/ForUser.css'

function ForUser() {
  return (
    <div className='opcionesUsuario'>
      <User use="Cart (0)" imgUrl="/bag.svg" route=""/>
      <User use="My Account" imgUrl="/profile.svg" route=""/>
    </div>
  )
}

export default ForUser
