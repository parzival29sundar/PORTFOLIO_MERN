import React from "react";
import SectionTitle from "../../coponents/SectionTitle"; 
import { useSelector } from "react-redux";


function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const {portfolioData } = useSelector((state) => state.root);
  // const [setIsAnimating] = React.useState(false);
  const {experiences} = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Time Period" />

      <div className="flex py-5 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-2xl px-5 
                             ${
                               selectedItemIndex === index
                                 ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#46ceb12c] py-4 lg:w-[23vh] sm:w-40"
                                 : "text-white"
                             }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 w-[240%] sm:w-full">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-white text-3xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experiences[selectedItemIndex].description}

          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
