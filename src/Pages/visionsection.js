import React from 'react';
import Pheader from '../Component/headerpage';
import { FaDotCircle } from 'react-icons/fa';
const Vision = () =>{
    return(
        <>
        
            <section  className="h-screen vision-section" 
            style={{
                   background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://img.freepik.com/free-photo/womens-office-collaboration_23-2148461411.jpg?t=st=1721222773~exp=1721226373~hmac=2303d6bf9147a72a14e0033d4d59151043953f6818ec6b7bdac1ad63fc2b897c&w=2740")',

               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',

            }}>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
                        <div className="container mx-auto p-4  bg-purple-700">
                            <div className="visoin-content">
                                <Pheader header= {'Our Vision'} details={"Quality care from quality experts."} head={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod dolores explicabo tempore velit incidunt vitae? Repellat esse libero dolorem!"} />
                                <div className="details-explain mt-5">
                                    <div className="one flex items-start gap-3 my-2">
                                        <div className="icons p-2 rounded-full bg-purple-300">
                                            <FaDotCircle className='text-md text-white'/>
                                        </div>
                                        <div className="text">
                                            <h4 className='font-semibold text-white '>Vision</h4>
                                            <p className='text-gray-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatum deserunt eius tempora, nesciunt ad quibusdam sapiente iusto eaque ut?</p>
                                        </div>
                                    </div>

                                    <div className="one flex items-start gap-3 my-2">
                                        <div className="icons p-2 rounded-full bg-purple-300">
                                            <FaDotCircle className='text-md text-white'/>
                                        </div>
                                        <div className="text">
                                            <h4 className='font-semibold text-white '>Mission</h4>
                                            <p className='text-gray-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatum deserunt eius tempora, nesciunt ad quibusdam sapiente iusto eaque ut?</p>
                                        </div>
                                    </div>
                                    <div className="one flex items-start gap-3 my-2">
                                        <div className="icons p-2 rounded-full bg-purple-300">
                                            <FaDotCircle className='text-md text-white'/>
                                        </div>
                                        <div className="text">
                                            <h4 className='font-semibold text-white '>Motto</h4>
                                            <p className='text-gray-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptatum deserunt eius tempora, nesciunt ad quibusdam sapiente iusto eaque ut?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Vision;