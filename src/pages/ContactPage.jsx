import React from "react";
import NavBar from "../components/layouts/NavBar";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Form from "../components/form/Form";
import { useObserver } from "../config/ObserverContext";
import ContactDiv from "../components/ui/ContactDiv";
import ContactGrid from "../components/ui/ContactGrid";
import ContactBtn from "../components/ui/ContactBtn";
import FooterPart from '../components/ui/FooterPart'
import Footer from '../components/layouts/Footer'

const ContactPage = () => {
  const { visible, observerRef } = useObserver();
  useEffect(() => {
    Aos.init();
  }, []);
  const [contact, setContact] = useState({
    phonecode:"",
    phone: "",
    email: "",
    employeestatus:"",
    country: "",
    fullname: "",
  });
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        {/* contact header */}
        <div className="bg-[#141414] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <ContactDiv
            title="general inquiries"
            delay={"700"}
            firstBtnText="contact@ai-podcasts.com"
            secondBtnText="+1 (123) 456-7890"
          />
          <ContactDiv
            delay={"1400"}
            title="techincal support"
            firstBtnText={"contact@ai-podcasts.com"}
            secondBtnText={"+1 (123) 456-7890"}
          />
          <ContactDiv
            title={"our office"}
            delay={"1800"}
            address={"Address: 123 AI Tech Avenue, Techville, 54321"}
            firstBtnText={"Get Directions"}
          />
          <ContactDiv icon={true} delay={"2200"} title={"connect with us"} />
        </div>
        {/* contact form */}
        <section className="flex flex-col md:flex-row justify-center items-center bg-[#141414] h-fit w-full gap-1">
          <div
            className="w-[100%] md:w-[50%] "
            ref={observerRef}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
          >
            <ContactGrid />
          </div>
          <div
            className="w-[100%] lg:w-[50%] flex justify-center "
            ref={observerRef}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
            data-aos-delay="800"
          >
            <Form
              User={contact}
              handleChange={handleChange}
              blogEditor={false}
              InputField={false}
              border_show={false}
              message={true}
              personalShow={true}
              display={true}
              showBlue={false}
              Text={"send"}
            />
          </div>
        </section>
        {/* for the asked questions */}
        <section className="flex flex-col md:flex-row items-center justify-center  bg-[#141414] h-fit w-full gap-1 ">
          <div
            className="w-[100%] md:w-[50%] "
            ref={observerRef}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
          >
            <ContactGrid firstGrid={false} />
          </div>

          <div
            className="w-[100%] lg:w-[50%] flex flex-col gap-2.5 justify-center mb-2"
            ref={observerRef}
            data-aos={visible ? "fade-up" : "fade-down"}
            data-aos-easing="ease-in-out"
            data-aos-delay="800"
          >
            <ContactBtn
              title="what is AI?"
              text="AI stands for Artificial Intelligence, which refers to the simulation of
        human intelligence in machines. It enables them to perform tasks like
        problem-solving, learning, and decision-making."
           delay={"700"}
            />
            <ContactBtn
              title="how can i listen to your podcasts?"
              minus={false}
              delay={"1200"}
            />
            <ContactBtn
              title="are your podcasts free to listen to"
              minus={false}
              delay={"1500"}
            />
            <ContactBtn
              title="can i download episodes to listen offline ?"
              minus={false}
              delay={"1800"}
            />
            <ContactBtn
              title="how often do you release new episodes?"
              minus={false}
              delay={"2100"}
            />
          </div>
        </section>
         <FooterPart/>
         <Footer/>
      </section>
    </>
  );
};

export default ContactPage;
