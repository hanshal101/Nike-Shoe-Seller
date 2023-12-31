import React from 'react'
import { services } from '../constants';
import ServicesComp from '../components/Services';
const Services: React.FC = () => {
  return (
    <section>
      <div className='flex flex-col sm:flex-row gap-4'>
        {
          services.map((service) =>(
            <ServicesComp imgURL={service.imgURL} label={service.label} subtext={service.subtext}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services;