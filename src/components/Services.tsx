import React from 'react'
import { truckFast } from '../assets/icons';

interface ServicesProps{
    imgURL: string,
    label: string,
    subtext: string
}

const ServicesComp: React.FC<ServicesProps> = (props) => {
  return (
    <div>
      <img src={truckFast} alt="services" width={120} height={120}/>
      <h1>{props.label}</h1>
      <p>{props.subtext}</p>
    </div>
  )
}

export default ServicesComp;
