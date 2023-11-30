import React from 'react'
import NeverStop from '../atoms/NeverStop'
import MainText from '../atoms/MainText'
import SecondText from '../atoms/SecondText'
import MainInput from '../molecules/MainInput'

import './styles/MainOptions.css'

function MainOptions() {
  return (
    <> 
        <div className='display'>
        <div>
            <NeverStop/>
            <MainText/>
            <SecondText/>
            <MainInput/>
        </div>
            <img src={'/Image.svg'}></img>
        </div>
    </>
  )
}

export default MainOptions
