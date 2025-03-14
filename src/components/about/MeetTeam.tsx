import communityspecialist from "../../assets/communityspecialist.svg";
import marketingmanager from "../../assets/marketingmanager.svg";
import programmanager from "../../assets/programmanager.svg";
import campmanager from "../../assets/campmanger.svg";
import manager from "../../assets/manager.svg";


function MeetTeam() {
  return (
    
   <div className="flex flex-col items-center mb-5"><div>Meet Our Team</div>
      <div>Meet the dedicated team behind EduFund, working to support and empower educational causes every day</div>
      <div className="grid grid-cols-3 gap-6 justify-center max-w-5xl mx-auto">
        {[
          { img: manager, name: "John Doe", role: "CEO" },
          { img: campmanager, name: "Jane Smith", role: "CTO" },
          { img: programmanager, name: "Michael Brown", role: "CFO" },
          { img: communityspecialist, name: "Emily White", role: "COO" },
          { img: marketingmanager, name: "David Johnson", role: "CMO" },
          { img: campmanager, name: "Sarah Wilson", role: "HR Manager" }
        ].map((member, index) => (
          <div key={index} className="w-[300px] flex flex-col items-center bg-white shadow-md rounded-lg p-4">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover" />
            <p className="mt-3 text-lg font-semibold">{member.name}</p>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
      </div>
    
  )
}

export default MeetTeam