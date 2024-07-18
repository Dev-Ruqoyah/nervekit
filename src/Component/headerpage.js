import React from 'react';
const Pheader = (props) =>{
    return(
       <>
         <p className='text-purple-300 font-bold '>{props.header}</p>
         <p className='text-purple-300 font-bold text-center'>{props.header1}</p>
         <h3 className='text-3xl text-white font-semibold'>{props.details}</h3>
         <h3 className='text-3xl text-purple-800 font-semibold text-center'>{props.detail}</h3>
         <p className='text-white '>{props.head}</p>

       </>
    )
}

export default Pheader;