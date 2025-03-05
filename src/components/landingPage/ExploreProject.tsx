import React from "react";
import children from "../../assets/children.svg";
import lonly from "../../assets/lonlygirl.svg";
import angleleft from "../../assets/angleleft.svg";
import angleright from "../../assets/angleright.svg";
import pupilboys from "../../assets/pupilboys.svg";
import smallgirl from "../../assets/smallgirl.svg";
import graduands from "../../assets/graduands.svg";
import blackandwhitestudents from "../../assets/balckandwhitestudents.svg";


const projects = [
  {
    id: 1,
    image: children,
    title: "Special Needs Education Support",
    raised: 50000,
    goal: 150000,
   
  },
  {
    id: 2,
    image: lonly,
    title: "Building Brighter Classrooms",
    raised: 30900,
    goal: 50000,
   
  },
  {
    id: 3,
    image: pupilboys,
    title: "Empowering Future Scholars",
    raised: 50000,
    goal: 150000,
   
  },
  {
    id: 4,
    image: smallgirl,
    title: "College Dream Fund",
    raised: 50000,
    goal: 150000,
   
  },
  {
    id: 5,
    image: graduands,
    title: "Back-to-School Supplies",
    raised: 50000,
    goal: 150000,
   
  },
];

function ExploreProject() {
  return (
    <div className="mb-6">
      <div className="flex justify-center items-center gap-6 bg-[#11451D] p-4 ">
        <div className="flex flex-col gap-4">
        <div className="font-400 text-white font-roboto font-600 text-[24px] leading-[28.8px]">Why Donate?</div>
        <div className="text-[#FFFFFF] font-roboto font-400 text-[16px] leading-[19.2px] w-[608px] h-[38px] ">Empowering students through community support. We provide a platform where communities come together to support education for all</div>
        <button className="bg-[#28A745] text-white w-[119px] h-[43px] border rounded" >Learn More</button>
        </div> 
        <div>

          <img src={blackandwhitestudents}/>
        </div>
      </div>

      <div className="flex space-y-5 space-x-5  justify-center p-8">
        <div className="bigcarouselcard bg-white p-4">
          {projects.slice(0, 1).map((project) => {
            const percentage = (project.raised / project.goal) * 100;
            return (
              <div key={project.id}>
                <img src={project.image} alt={project.title} />
                <div>{project.title}</div>
                <div>
                  ${project.raised} 
                </div>
                <div className="w-full  h-2 rounded">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                  <div className=" text-right text-[#A78819]">${project.goal - project.raised}</div>
               
              </div>
            );
          })}
        </div>

        <div className="smallcarouselcard bg-white items-center p-4 flex flex-col w-[608px]">
         

          <div className="grid grid-cols-2 gap-2">
            {projects.slice(1).map((project) => {
              const percentage = (project.raised / project.goal) * 100;
              return (
                <div key={project.id}>
                  <img src={project.image} alt={project.title} />
                  <div>{project.title}</div>
                  <div>
                    ${project.raised} 
                  </div>
                  <div className="w-full h-2 rounded">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                 
                   
                    <div className="text-right text-[#A78819]">${project.goal - project.raised} </div>
                
                </div>
              );
            })}
          </div>
          <div className="items-center bg-white justify-center flex">
            <button>
              <img src={angleleft} alt="Previous" />
            </button>
            <button>
              <img src={angleright} alt="Next" />
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default ExploreProject;
