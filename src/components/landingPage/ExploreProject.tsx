import React from "react";
import children from "../../assets/children.svg";
import lonly from "../../assets/lonlygirl.svg";
import angleleft from "../../assets/angleleft.svg";
import angleright from "../../assets/angleright.svg";
import pupilboys from "../../assets/pupilboys.svg";
import smallgirl from "../../assets/smallgirl.svg";
import graduands from "../../assets/graduands.svg";


const projects = [
  {
    id: 1,
    image: children,
    title: "Special Needs Education Support",
    raised: 50000,
    goal: 150000,
    donations: 105,
  },
  {
    id: 2,
    image: lonly,
    title: "Building Brighter Classrooms",
    raised: 30900,
    goal: 50000,
    donations: 190,
  },
  {
    id: 3,
    image: pupilboys,
    title: "Empowering Future Scholars",
    raised: 50000,
    goal: 150000,
    donations: 105,
  },
  {
    id: 4,
    image: smallgirl,
    title: "College Dream Fund",
    raised: 50000,
    goal: 150000,
    donations: 105,
  },
  {
    id: 5,
    image: graduands,
    title: "Back-to-School Supplies",
    raised: 50000,
    goal: 150000,
    donations: 105,
  },
];

function ExploreProject() {
  return (
    <div className="mb-6">
      <div className="flex gap-6 bg-[#B2ECF5] items-center justify-center p-4 ">
        <div className="font-400 text-[18px]">Explore Project:</div>
        <div className="text-green-600 underline font-sans ">Featured</div>
        <div>Newest</div>
        <div>Nearly Funded</div>
        <div>Completed</div>
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
                  ${project.raised} <p>raised of ${project.goal} goal</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="flex">
                  <div className="w-[70%]">{project.donations} Donations</div>
                  <div>${project.goal - project.raised} to go</div>
                </div>
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
                    ${project.raised} <p>raised of ${project.goal} goal</p>
                  </div>
                  <div className="w-full h-2 rounded">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex">
                    <div className="w-[70%]">{project.donations} Donations</div>
                    <div>${project.goal - project.raised} to go</div>
                  </div>
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
