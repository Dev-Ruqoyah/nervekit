import React from 'react';

const Box = (props) =>{
    return(
        <>
            <div className=" shadow-sm p-4 rounded-md">
                <img className='rounded-md' src={props.image} width={"100%"} alt="" />
                <div className="content flex flex-col items-center justify-center gap-3">
                    <h3 className='text-2xl font-semibold text-purple-800'>{props.type}</h3>
                    <p className='text-purple-400 text-center'>{props.detaill}</p>
                    <button type='button' className='w-40 h-10 bg-purple-600 text-white hover:bg-purple-700 rounded-md'>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Box;