import React from 'react'
import { star } from '../assets/icons'

interface popularprodProps{
    imgURL: string,
    name: string,
    price: string,
}

interface popularprodPropsIndi{
    indi: popularprodProps[]
}
const PopularProdCard: React.FC<popularprodProps> = (props) => {
  return (
    <div className=''>
    <div>
      <img src={props.imgURL} alt="ProdImg" className='shadow-2xl rounded-3xl'/>
      <div className='flex gap-4 mt-6 '>
        <img src={star} alt="" />
        <p className='text-slate-gray text-2xl'>(4.5)</p>
      </div>
      
        <p className='text-2xl font-semibold font-montserrat mt-2'>{props.name}</p>
        <p className='text-coral-red font-bold mt-2'>{props.price}</p>
      </div>
    </div>
  )
}

export default PopularProdCard
