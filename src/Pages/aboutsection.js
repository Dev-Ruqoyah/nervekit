import React from "react";
import { Button } from "flowbite-react";
import { FaCheck } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="container mx-auto h-screen ">
        <div className="mx-auto py-6">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12 place-content-evenly  place-items-center my-auto gap-8 h-screen container mx-auto">
            <div className="px-4  flex justify-center items-center my-auto h-full">
              <div className="about-text flex flex-col gap-3 py-3 container mx-auto my-auto h-full">
                <h3 className="font-bold text-purple-700 m-0">WHO WE ARE</h3>

                <h2 className="text-4xl font-semibold m-0">
                  No more feeling <br />
                  Uncomfortable
                </h2>

                <p className="text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias debitis laboriosam delectus quasi iusto quos itaque id
                  ab, beatae pariatur necessitatibus reprehenderit animi?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Fuga, est.
                </p>
                <div className="about-footer flex items-end justify-between px-4">
                  <ul className="mt-6 flex flex-col gap-2 text-md ">
                    <li className="flex items-center justify-start gap-2">
                      <FaCheck />
                      <p>Certified Expert</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <FaCheck />
                      <p>Professional & Experience</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <FaCheck />
                      <p>Smart Solution</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                      <FaCheck />
                      <p>24/7 Support</p>
                    </li>
                  </ul>
                  <div>
                    <div className="play-button p-1 bg-purple-200 rounded-full">
                      <div className="p-1 rounded-full bg-white">
                        <button
                          type="button"
                          className=" py-5 px-5 bg-white hover:bg-slate-200 shadow rounded-full "
                        >
                          <MdPlayArrow className="text-purple-700" size={40} />
                        </button>
                      </div>
                    </div>
                    <p className="text-purple-700 font-semibold text-center">PLAY INTRO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-content  rounded-md relative">
                <div className="image rounded-md">
                    <img src="https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117858.jpg?t=st=1721147873~exp=1721151473~hmac=a8c2f9517e4c77a529ed2353a0f2b93f40aad5500b151f9489e2e69dbc12e952&w=740" className="rounded-md" width={'97%'} alt="" />
                    <div className="experience border p-4 w-44 absolute bottom-0 bg-white rounded-md">
                        <h3 className="m-0 font-bold text-6xl text-purple-700">15+</h3>
                        <p className="m-0 text-lg text-purple-700">Years Experience</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
