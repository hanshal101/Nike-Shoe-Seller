import React from 'react'
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoe8 } from '../assets/images';

const SuperQuality: React.FC = () => {
  return (
    <section className='flex flex-col gap-16 sm:flex-row w-full mt-0'>
      <div className='w-full sm:w-2/5 font-montserrat mt-16'>
        <h1 className='text-4xl font-semibold'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
        <p className='text-slate-gray mt-8 text-xl'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='text-slate-gray mt-5 text-xl'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-10'>
        <Button iconURL={arrowRight} label='Shop Now'/>
        </div>
      </div>

      
        <img src={shoe8} alt="QualityImg" className='sm:ml-52'/>
      
    </section>
  )
}


export default SuperQuality;