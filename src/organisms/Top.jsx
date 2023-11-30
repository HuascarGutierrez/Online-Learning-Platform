import React from 'react'
import ForUser from '../molecules/ForUser'
import Icon from '../atoms/Icon'
import OptionsM from '../molecules/OptionsM'

import './styles/Top.css'
  
function Top() {
  return (
    <div className='opcionesTop'>
        <Icon/>
        <OptionsM/>
        <ForUser/>
    </div>
  )
}

export default Top
