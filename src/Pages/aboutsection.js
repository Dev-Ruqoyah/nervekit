import React from "react";

const About = () =>{
    return (
        <>
            <div className="container mx-auto py-12">
                <div className="mx-auto py-12">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12 gap-4">
                        <div className=" border">
                            <div className="about-text flex flex-col gap-3 py-3">
                                <h3 className="font-bold">WHO WE ARE</h3>

                                <h2 className="text-4xl font-semibold">No more feeling <br />Uncomfortable</h2>

                                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias debitis laboriosam delectus quasi iusto quos itaque id ab, beatae pariatur necessitatibus reprehenderit animi?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}


export default About;