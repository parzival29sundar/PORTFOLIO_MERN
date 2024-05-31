import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const {portfolioData } = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {firstName , lastName, welcomeText , description, caption} = intro;
  return (
    <div className="h-[60vh] bg-primary flex flex-col items-start justify-center gap-5 py-10">
      <h1 className="text-white text-2xl sm:text-xl">{welcomeText || ''}</h1>
      <h1 className=" font-primaryRegular text-[90px] sm:text-5xl text-secondary">
        {firstName || ''} {lastName || ''}
      </h1>
      <h1 className="text-5xl sm:text-3xl text-white font-medium">
        {caption || ''}
      </h1>
      
      <p className="text-white text-[20px] sm:text-[16px]">
        {description || ''}
      </p>

      <button className="border-2 border-tertiary text-tertiary text-xl mt-4 px-10 py-3 rounded-lg">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
