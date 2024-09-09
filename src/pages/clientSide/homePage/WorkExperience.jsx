const WorkExperience = () => {
  return (
    <div className="container mx-auto  my-5">
      <p className="text-5xl font-bold text-center py-5">
        My <span className="text-[#fd853a]">Work Experience</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-12">
        <div className="lg:space-y-20 space-y-8 text-center lg:text-start  w-full lg:flex-1">
          <div>
            <p className="text-4xl font-bold">Cognizant, Mumbai</p>
            <p className="text-gray-300 pt-3">Sep 2016- July 2020</p>
          </div>

          <div>
            <p className="text-4xl font-bold">Sugee Pvt limited, Mumbai</p>
            <p className="text-gray-300 pt-3">Sep 2020- July 2023</p>
          </div>

          <div>
            <p className="text-4xl font-bold">Cinetstox, Mumbai</p>
            <p className="text-gray-300 pt-3">Sep 2023</p>
          </div>
        </div>
        <div className=" text-center h-full flex-1">
          <ul className="steps steps-vertical -mt-16">
            <li className="step step-primary lg:h-[200px] h-24"></li>
            <li className="step lg:h-[200px] h-24"> </li>
            <li className="step  step-primary lg:h-[200px] h-24"></li>
           
          </ul>
        </div>
        <div className="lg:space-y-20 space-y-8 text-center lg:text-start flex-1">
          <div className="">
            <p className="text-4xl font-bold">Experince Designer</p>
            <p className="text-gray-300 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
            </p>
          </div>

          <div className="">
            <p className="text-4xl font-bold">UI/UX Designer</p>
            <p className="text-gray-300 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
            </p>
          </div>

          <div className="-mt-8">
            <p className="text-4xl font-bold">Lead UX Designer</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
