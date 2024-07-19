import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
const ServiceBox =(props) =>{
    return( 
    <>
        <div className="container relative mx-auto">
            <div className="boxe bg-purple-400 p-6 py-8">
                <p className='absolute -left-2  -top-2 w-7 h-7 text-center flex items-center justify-center text-md rounded-full bg-white font-bold'>{props.number}</p>
                <div className="content flex flex-col items-center justify-center gap-2">
                    <div className="icons p-2 rounded-full bg-white">
                        <FaDotCircle className='text-purple-700 text-md'/>
                    </div>
                    <h3 className='text-2xl text-slate-50 font-semibold'>{props.head}</h3>
                    <p className='text-md text-center text-slate-50 text-md'>{props.service}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default  ServiceBox;