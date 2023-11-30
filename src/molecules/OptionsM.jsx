import React from 'react'
import Options from '../atoms/Options'
import Shop from '../atoms/Shop'

import './styles/OptionsM.css'

function OptionsM() {
  return (
    <div className='opciones'>
      <Shop/>
      <Options option="For Kindergarden" route=""/>
      <Options option="For High School" route=""/>
      <Options option="For College" route=""/>
      <Options option="Courses" route=""/>
    </div>
  )
}

export default OptionsM
