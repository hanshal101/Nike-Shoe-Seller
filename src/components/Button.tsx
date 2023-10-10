import { StringifyOptions } from 'querystring';
import React from 'react'

interface labelProps{
    label?: string,
    iconURL?: string
}
const Button: React.FC<labelProps> = (props) => {
  return (
    <button className='bg-coral-red rounded-full flex items-center px-7 py-3 border font-montserrat text-lg leading-none gap-1 hover:bg-white-400 duration-300 hover:border-coral-red hover:text-black text-white'>
        {props.label}

        <img src={props.iconURL} alt="Btn Img" className='ml-2 rounded-full h-6 w-6' />
    </button>
  )
}


export default Button;