import React from 'react'

interface shoeProps{
    imgURL: {
        thumbnail: string;
        bigShoe: string;
    },
    changeShoeImg?: {},
    bigShoeImage?: {}
}



const ShoeCard: React.FC<shoeProps> = (props) => {
    const handleClick =()=>{
    if(props.bigShoeImage !== props.imgURL.bigShoe){}
    }
  return (
    <div className= {`border-2 rounded-xl
    ${props.bigShoeImage === props.imgURL
        ? 'border-coral-red' : 'border-transparent'
    } cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={props.imgURL.bigShoe} height={130} width={240} className='object-contain' />
        </div>
    </div>
  )
}


export default ShoeCard;