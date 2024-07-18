import React from 'react';
import Pheader from '../Component/headerpage';
import Box from '../Component/offerbox'
const Offer = () =>{
    return(
    <>
    
        <section className='h-screen text-white'>
            <div className="container mx-auto py-10">
            <Pheader header1={"What we offer"}  detail= {"Getting you back in shape"}/>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
                    <Box image={"https://img.freepik.com/free-photo/people-sharing-feelings-emotions-group-therapy-session_23-2151073993.jpg?t=st=1721235741~exp=1721239341~hmac=05fb0ad67b3323f9158e3ebbe3d1a51ccd1ef2b98a43ab5a616108316c0f0c86&w=740"} type={"Family Counseling"} detaill ={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quasi quae."} />
                    <Box image={"https://img.freepik.com/free-photo/people-drinking-kombucha-gathering_23-2150168497.jpg?t=st=1721235801~exp=1721239401~hmac=a129027ed5217304ebd303ffd4675d74ef251aa6246e4ef6716afc556b68bee3&w=740"} type={"Individual Therapy"} detaill ={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quasi quae."} />
                    
                    <Box image={"https://img.freepik.com/free-photo/people-sharing-feelings-emotions-group-therapy-session_23-2151074023.jpg?t=st=1721235847~exp=1721239447~hmac=a7cd5df4b519673853c902ffe9a6b27ff201711c065362f4a24cb049f4a97825&w=740"} type={"Group Therapy"} detaill ={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quasi quae."} />

                    <Box image={"https://img.freepik.com/premium-photo/multiracial-couple-love-married-family-man-husband-talk-with-woman-wife-hold-hands-supporting_717737-2837.jpg?w=826"} type={"Couples Therapy"} detaill ={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quasi quae."} />

                    <Box image={"https://img.freepik.com/free-photo/portrait-beautiful-afro-american-woman_23-2148363600.jpg?t=st=1721235937~exp=1721239537~hmac=a073e46f9daac6da697fdb2621968e98de018e1b41befe2a90f64231dfd0741b&w=740"} type={"Depression Therapy"} detaill ={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quasi quae."} />

                    <Box image={"https://img.freepik.com/premium-photo/unhappy-young-african-american-woman-covering-face-with-hands-crying-session-with-psychologist_116547-21931.jpg?w=740"} type={"Anxiety Therapy"} detaill ={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eius quasi quae."} />
                    
                </div>
            </div>
        </section>

    
    </>
    )
}


export default Offer;