import React from "react";
import { Button } from "flowbite-react";

const HeroSection = () =>{
    return(
        <>
            <div className="">
                <div className="container mx-auto ">
                    <div className="hero-text basis-1/3 flex flex-col items-center justify-center gap-5 h-screen lg:w-1/2 md:w-2/3 sm:w-1 mx-auto ">
                        <h1 className="lg:text-6xl md:text-3xl sm:text-2xl">Get care from the <br /> people who care</h1>
                        <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, error suscipit. Quas, voluptas?</p>
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