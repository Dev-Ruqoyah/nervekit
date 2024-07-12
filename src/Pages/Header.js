import React from "react";
import { Navbar,Button, NavbarCollapse } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        
        <div>
            <Navbar className=" bg-slate-50 sticky">
                <Link to="/" className="self-center whitespace-nowrap text-black text-xl sm:text-md ">
                    <span className="border-2 rounded-md border-purple-700 p-2 ">nerveKit</span>
                  
                </Link>
                <div className="flex justify-center md:order-2  gap-2">
                    <Link to="/sign-in">
                        <Button gradientDuoTone ="purpleToBlue" >Get Appointment</Button>
                    </Link>



                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active>
                        <Link to="/Home"  className="hover:text-purple-700 border-b-2 border-purple-700 text-md ">Home</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/About" className="hover:text-purple-700">About Us</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/Services" className="hover:text-purple-700">Services</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="/Home" className="hover:text-purple-700">Contact Us</Link>
                    </Navbar.Link>
                </Navbar.Collapse>



            </Navbar>
        </div>
     );
}

export default Header;
