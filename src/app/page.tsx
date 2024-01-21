import Hero from "@/components/Hero";
import "./globals.css";
import Testimonial from "@/components/Testimonial";
import BookingForm from "@/components/BookingForm";
import Graphics from "@/components/Graphics";
import MainForm from "@/components/Booking/MainForm";


export default function Home() {
  return (
    <>
       <Hero/>
       <div className="flex justify-between my-10 mx-5">
       <MainForm/>
       <span className="hidden lg:block mr-32"><Graphics/></span>
       </div>
      {/* <div className="flex items-center justify-start px-20 py-20 my-11"><MainForm/><span className="hidden justify-end pl-20 my-11 w-full lg:block"><Graphics/></span></div> */}
      <Testimonial/> 
      
    </>
  );
}
