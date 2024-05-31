import React from "react";
import SectionTitle from "../../coponents/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const {portfolioData } = useSelector((state) => state.root);
  const {contact} = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Say Hello" />

      

      <div className="flex sm:flex-col items-center justify-between" >

      <div className="h-[70vh] mr-[100px] sm:h-[50vh] sm:mr-[0px]">            
        <dotlottie-player
          src="https://lottie.host/81d6ffb9-3998-47f1-8bb3-d5ffb3935d36/vMiXzC15r0.json"
          background="transparent"
          speed="0.3"
          playMode="alternate"
          autoplay
          loop
        ></dotlottie-player>
          </div>

        <div className="flex flex-col gap-2 text-2xl sm:text-xl ml-[65px]">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map(
            (key) => (
              key !== '_id' && ( <p className="ml-5">
              <span className="text-tertiary">{key}: </span>
              <span className="text-tertiary">{contact[key]}</span>
            </p>
                      )
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>

          

      </div>
    </div>
  );
}

export default Contact;
