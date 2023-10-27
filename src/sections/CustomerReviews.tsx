import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const CustomerReviews: React.FC = () => {
  return (
    <section className='flex flex-col gap-16 sm:flex-row mt-0'>
      <div className='sm:min-w-[50%] w-full'>
        <img src={offer} className='w-full h-fit'/>
      </div>

      <div className='justify-center items-start'>
        <h1 className='text-4xl font-semibold'>
        <span className='text-coral-red'>
          Special
        </span> Offer
        </h1>
        <p className='min-w-[50%] text-gray-700 mt-16 text-xl'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='min-w-[50%] text-gray-700 mt-5 text-xl'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-8'>
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn More" iconURL={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews