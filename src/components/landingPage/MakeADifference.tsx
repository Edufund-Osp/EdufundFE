import surprisedguy from "../../assets/surprisedguy.svg";
import guyinblue from "../../assets/guyinblue.svg";



function MakeADifference() {
  return (
    <div className=' flex justify-center mb-10'>
      <div className='flex flex-col items-center gap-4 justify-center  w-[1240px]'>
      <div className='flex flex-col items-center w-[85%] gap-[24px]  '>
      <p className='font-roboto text-[24px] font-600 text-center text-[#28A745]'>Make A Difference: Volunteer with Education</p>
      <p className='text-center font-roboto text-[16px] font-400 text-[#2C3033]'>Join a community of passionate individuals contributing their time and skills to helps students, schools, and educational programs thrive. Whether you're and educator, professional, or someone eager to give back, your support can change lives. </p>
      </div>

      <div className=" flex gap-6 justify-center">
      <div className="w-[390px] rounded-lg shadow-md bg-white p-5 flex flex-col items-left gap-3">
        <div className="border rounded-full w-[90px] h-[90px] text-[56px] text-[#11451D] text-center font-700 mb-3" >1</div>
      <div className="font-700 text-[16px] font-roboto text-[#2C30331234]">Why Volunteer?</div>
     <div>Volunteering allows you to make a direct impact on education by supporting students and schools. You’ll be able to see the positive outcomes your contributions create and join a community of people who share your passion for education.<button className="text-[#17A2B8] font-700 text-[16px] font-roboto cursor-pointer">Read More</button></div>
     <div><img src={surprisedguy}/></div>
      </div>


      <div className="w-[390px] rounded-lg shadow-md bg-white p-5 flex flex-col items-left gap-3">
        <div className="border rounded-full w-[90px]  h-[90px] text-[56px] text-[#11451D] text-center font-700 mb-3" >2</div>
      <div className="font-700 text-[16px] font-roboto text-[#2C30331234]">How can I volunteer?</div>
     <div>As a volunteer, you can offer tutoring and mentorship to help students with academic challenges. You can also support campaigns by assisting with writing compelling stories, designing visuals, or helping campaign creators share th...<button className="text-[#17A2B8] font-700 text-[16px] font-roboto cursor-pointer">Read More</button></div>
     <div><img src={guyinblue}/></div>
     

     
      </div>



      <div className="w-[390px] rounded-lg shadow-md bg-white p-5  flex flex-col items-left gap-3">
        <div className="border rounded-full w-[90px]  h-[90px] text-[56px] text-[#11451D] text-center font-700 mb-3" >3</div>
      <div className="font-700 text-[16px] font-roboto text-[#2C30331234]">How can I volunteer?</div>
     <div>Volunteering is a powerful way to support educational initiatives beyond financial contributions. By offering your time, expertise, and dedication, you can help educational campaigns succeed and empower students and institutio... <button className="text-[#17A2B8] font-700 text-[16px] font-roboto cursor-pointer">Read More</button></div>
     <div><img src={surprisedguy}/></div>
     

     </div>
      </div>


      

      <div className="items-center bg-white justify-center flex">
            <button className="   bg-[#28A745] rounded-[8px] border py-3 px-4 text-white">
              Volunteer Now
            </button>
           
          </div>

      </div>
    </div>
  );
}

export default MakeADifference;