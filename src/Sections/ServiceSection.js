import React from "react";
import Pheader from "../Component/headerpage";
import ServiceBox from "../Component/servicebox";
const Service = () => {
  return (
    <>
      <section className="bg-purple-700 py-16">
        <div className="container mx-auto">
         <div className="mx-auto">
         <Pheader 
            header1={"HOW IT WORKS"}
            detais={"Easy step to get awesome service"}
            head1={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio  "
            }
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 container px-8 gap-5 mt-10">
            <ServiceBox number={"1"} head={"Consultation"} service={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis quibusdam distinctio! Commodi, deserunt dolores?"}/>

            <ServiceBox number={"2"} head={"Choose Package"} service={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis quibusdam distinctio! Commodi, deserunt dolores?"}/>

            <ServiceBox number={"3"} head={"Get Service"} service={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia corporis quibusdam distinctio! Commodi, deserunt dolores?"}/>
            
          </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Service;
