import React from "react";
import SectionTitle from "../../coponents/SectionTitle";
import {useSelector} from 'react-redux';

function About() {
  const {portfolioData} =useSelector((state) => state.root);
  const {about} = portfolioData;
  const {skills , lottieURL , description1 , description2} = about;
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] sm:h-[50vh] w-1/2 sm:w-full">
          <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="2"
            direction="1"
            playMode="alternate"
            autoplay
            loop
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white text-[20px] sm:text-[16px]">
            {description1 || ""}
          </p>
          <p className="text-white text-[20px] sm:text-[16px]">
            {description2 || ""}
          </p>
        </div>
      </div>
      
      <div className="py-10">
        <h1  className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently.
        </h1>
        <div className="flex flex-wrap gap-12 mt-5">
        {skills.map((skill,index) =>(
          <div className="border border-tertiary py-3 px-10 rounded-lg ">
            <h1 className="text-tertiary">{skill}</h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default About;
