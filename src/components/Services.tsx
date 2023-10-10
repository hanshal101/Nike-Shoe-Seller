import React from 'react'
import { truckFast } from '../assets/icons';

interface ServicesProps{
    imgURL: string,
    label: string,
    subtext: string
}

const ServicesComp: React.FC<ServicesProps> = (props) => {
  return (
    <div className='p-14 flex flex-col flex-wrap mx-4 rounded-2xl shadow-2xl'>
      <img src={truckFast} alt="services" width={50} height={50}/>
      <h1 className='text-2xl font-montserrat font-bold mt-3'>{props.label}</h1>
      <p className='font-montserrat mt-2 text-slate-gray'>{props.subtext}</p>
    </div>
  )
}

export default ServicesComp;
