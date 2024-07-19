import React from 'react';
const Pheader = (props) =>{
    return(
       <>
         <div className="flex flex-col">
         <p className='text-purple-300 font-bold '>{props.header}</p>
         <p className='text-purple-300 font-bold text-center'>{props.header1}</p>
         <h3 className='text-3xl text-white font-semibold '>{props.details}</h3>
         <h3 className='text-3xl text-white font-semibold text-center'>{props.detais}</h3>
         <h3 className='text-3xl text-purple-800 font-semibold text-center'>{props.detail}</h3>
         <p className='text-white '>{props.head}</p>
         <p className='text-white text-center text-xl '>{props.head1}</p>
         </div>

       </>
    )
}

export default Pheader;