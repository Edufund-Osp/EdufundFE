import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import smartgirl from "../../assets/smartgirl.svg";
import bluedressedgirls from "../../assets/bluedressedgirls.svg";
import graduandsinblack from "../../assets/graduandsinblack.svg";
import runningchildren from "../../assets/runningchildren.svg";
import childinart from "../../assets/childinart.svg";
import avatar1 from "../../assets/Avatar1.svg";
import avatar2 from "../../assets/Avatar2.svg";
import avatar3 from "../../assets/Avatar3.svg";
import avatar4 from "../../assets/Avatar4.svg";







const HighlightedText = styled.span`
  color:#28A745;
`;

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="w-full  flex items-center justify-center mb-13">
    <div className=" w-[85%] h-[1000px] bg-center  flex flex-col items-center justify-center gap-10">
    
    <div className="flex flex-col justify-center items-center gap-8 h-[332px] w-[996px] relative mt-[100px]">
      <div className="flex flex-col gap-4 text-center justify-center">
        <div className="text-[64px] font-700 leading-[76.8px] text-black font-montserrat">
          Empower <HighlightedText>Education</HighlightedText> Through
        </div>
        <div className="text-[64px] font-700 leading-[76.8px] text-black font-montserrat">Crowdfunding</div>
      </div>
      <div className="font-roboto text-[24px] font-normal text-neutral-1000 text-center">
  Join the community supporting education across the globe.
</div>
     
<div className="flex gap-2 items-center justify-between border rounded-full h-[34px] py-4 w-[244px] p-2 border-[#28A745]">
  <div className="w-[40%] p-4 relative flex items-center ">
    <div className="absolute left-0  z-30">
      <img src={avatar1} className="w-[24px] h-[24px] rounded-full border border-white" />
    </div>
    <div className="absolute left-4  z-20">
      <img src={avatar2} className=" w-[24px] h-[24px] rounded-full border border-white" />
    </div>
    <div className="absolute left-8  z-10">
      <img src={avatar3} className="w-[24px] h-[24px] rounded-full border border-white" />
    </div>
    <div className="absolute left-12  z-10">
      <img src={avatar4} className="w-[24px] h-[24px] rounded-full border border-white" />
    </div>
    <div className="absolute left-16  z-10">
      <img src={avatar2} className="w-[24px] h-[24px] rounded-full border border-white" />
    </div>
  </div>
  <div className="w-[124px] font-400 font-roboto text-[14px] text-[#28A745]">1200+ Beneficiaries</div>
</div>



<div className="flex gap-4">
  <button 
    onClick={() => navigate("/start-donating")} 
    className="font-roboto font-600 text-white text-[16px] leading-5 tracking-[0.25%] bg-[#28A745] hover:bg-green-700 py-2 px-5 rounded cursor-pointer">
    Donate to Crowdfunding
  </button>
  <button 
    onClick={() => navigate("/start-funding")} 
    className="font-roboto font-600 text-[#28A745] text-[16px] leading-5 tracking-[0.25%] border border-[#28A745] py-2 px-5 rounded cursor-pointer">
    Start a Fundraiser
  </button>
</div>
   
    </div>



    <div className="flex  w-full items-center justify-center">
      <div className="relative flex  w-full items-end h-[300px]">
      <div className="absolute left-0">

{/* 1st Image (small) */}
<img src={smartgirl} className="w-[290px] h-[210px] " />
</div>
<div className="absolute left-55">
{/* 2nd Image (slightly bigger, overlaps 1st) */}
<img src={bluedressedgirls} className="w-[290px] h-[240px]" />
</div>
<div className="absolute left-107">
{/* 3rd Image (largest) */}
<img src={graduandsinblack} className="w-[395px] h-[280px] " />
</div>
<div className="absolute  left-180">
{/* 4th Image (same size as 2nd, overlaps 3rd) */}
<img src={runningchildren} className="w-[290px] h-[240px]  " />
</div>
<div className="absolute left-233">
{/* 5th Image (same size as 1st, overlaps 4th) */}
<img src={childinart} className="w-[290px] h-[210px]" />
</div>
</div>
</div>



{/*  */}
<div className="text-[#0A434C] flex justify-between items-center w-[99.5%] h-[130px] bg-[var(--Secondary-Secondary100)] px-8 border-white border-2">
  {/* Fund Disbursed */}
  <div className="flex flex-col items-center justify-center text-center w-1/5 h-full">
    <p className="text-[28px]  font-roboto font-600">#500M</p>
    <p className="text-[24px]  font-roboto font-400">Fund Disbursed</p>
  </div>

  {/* Vertical Divider */}
  <div className="w-[1px] h-[80%] bg-gray-400"></div>

  {/* Ongoing Funding */}
  <div className="flex flex-col items-center justify-center text-center w-1/5 h-full">
    <p className="text-[28px]  font-roboto font-600">20+</p>
    <p className="text-[24px]  font-roboto font-400">Ongoing Funding</p>
  </div>

  {/* Vertical Divider */}
  <div className="w-[1px] h-[80%] bg-gray-400"></div>

  {/* Initiative Supported */}
  <div className="flex flex-col items-center justify-center text-center w-1/5 h-full">
    <p className="text-[28px]  font-roboto font-600">1000+</p>
    <p className="text-[24px]  font-roboto font-400">Initiative Supported</p>
  </div>

  {/* Vertical Divider */}
  <div className="w-[1px] h-[80%] bg-gray-400"></div>

  {/* Sponsors */}
  <div className="flex flex-col items-center justify-center text-center w-1/5 h-full">
    <p className="text-[28px]  font-roboto font-600">1,200</p>
    <p className="text-[24px]  font-roboto font-400">Sponsors</p>
  </div>
</div>









</div>

</div>
  );
}

export default Hero;
