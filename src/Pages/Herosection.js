import React from "react";
import { Button } from "flowbite-react";

const HeroSection = () =>{
    return(
        <>
            <div className=""   
            style={{
                   background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?t=st=1721223782~exp=1721227382~hmac=6cd5384982a8d70563b5d47b18d04fcc169a86706a4e51b7e5af070e87dd0164&w=2740")',

               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',

            }}>
                <div className="container mx-auto ">
                    <div className="hero-text basis-1/3 flex flex-col items-center justify-center gap-5 h-screen lg:w-1/2 md:w-2/3 sm:w-1 mx-auto ">
                        <h1 className="text-6xl text-white">Get care from the <br /> people who care</h1>
                        <p className="text-xl text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, error suscipit. Quas, voluptas?</p>
                        <div>
                            <Button className="w-40  py-1"  gradientDuoTone = "purpleToBlue">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;