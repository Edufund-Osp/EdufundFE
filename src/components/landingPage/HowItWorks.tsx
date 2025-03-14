import startcampaign from "../../assets/startcampaign.svg";
import sharewithnetwork from "../../assets/sharewithnetwork.svg";
import raisefunds from "../../assets/raisefunds.svg";



function HowItWorks({ showCreateCampaignButton = true }) {
  return (
    <div className='flex flex-col items-center justify-center mb-6'>
      <div className='w-[1240px] flex flex-col gap-10 items-center '>
      <div className='flex flex-col gap-[24px] items-center w-[85%]'>
      <p className='font-roboto text-[24px] font-600 text-center text-[#28A745] leading-[28.8px]'>How It Works: Start Your Education Campaign in Three Simple Steps</p>
      <p className='text-center font-roboto text-[16px] font-400 text-[#2C3033]'>Launching your fundraising campaign is easy! Follow these three simple steps to begin raising funds for your educational goals, share your story with your community, and make an impact with the support you need</p>
      </div>

    
      <div className='flex justify-center gap-6  w-full'>
      <div className='flex flex-col  w-[390px] border-white rounded-2xl bg-white p-4 gap-3'>
      <div className='flex flex-col items-center justify-center bg-[#11451D] w-full h-[145px] border rounded-2xl'>
          <img src={startcampaign}/>
          <p className='text-white'>01</p>
         <p className='text-white'>Start a Campaign</p></div>
         <div  className="text-[#2C3033]">
         
         <div className="flex gap-2">
         <strong>•</strong><p> Create an account and fill in your basic details.</p></div>
         <div className="flex gap-2"> 
         <strong>•</strong><p> Explain why you need help—whether it's for school supplies, a project, or an event. Share your story so people understand why it's important.</p></div>
         <div className="flex gap-2">
         <strong>•</strong>  
         <p> Set your fundraising goal—the amount you hope to raise. Once you're done, your campaign is live and ready to receive donations.</p> </div>
        
         </div>
          </div>


          <div className='flex flex-col  w-[390px] border-white rounded-2xl bg-white p-4 gap-3'>
          <div className='flex flex-col items-center justify-center bg-[#11451D]  w-full h-[145px] border rounded-2xl'>
          <img src={sharewithnetwork}/>
          <p className='text-white'>02</p>
         <p className='text-white'>Share with your network</p></div>
         <div  className="text-[#2C3033]">        
         <div className="flex gap-2">
         <strong>•</strong><p> Share with family and friends: Send your campaign link through email to those closest to you.</p></div>
         <div className="flex gap-2"> 
         <strong>•</strong><p> Post on social media: Share it on your social media accounts to reach a larger audience.</p></div>
         <div className="flex gap-2">
         <strong>•</strong>  
         <p> Tell classmates and teachers: Let people in your school or community know about your campaign.</p> </div>
         <div className="flex gap-2">
         <strong>•</strong>
         <p> The more, the better: The more people who hear about it, the more likely you are to get donations.</p></div>
         </div>



          </div>

          <div className='flex flex-col w-[390px] rounded-2xl bg-white border-white p-4 gap-3'>
          <div className='flex flex-col items-center justify-center bg-[#11451D] w-full h-[145px]  rounded-2xl'>
          <img src={raisefunds}/>
          <p className='text-white'>03</p>
         <p className='text-white'> Raise Funds</p></div>
         <div  className="text-[#2C3033]">
          <div className="flex gap-2">
         <strong>•</strong>
         <p> Receive donations: Watch as people start contributing to your campaign.</p>
         </div>
         <div className="flex gap-2">
         <strong>•</strong><p> Keep supporters updated: Share your progress with those who donated to keep them engaged.</p></div>
         <div className="flex gap-2"> 
         <strong>•</strong><p> Use the funds: Once you reach your goal, withdraw the money to support your cause.</p></div>
         <div className="flex gap-2">
         <strong>•</strong>  
         <p> Show appreciation: Thank your donors and let them know how their contributions made a difference.</p> </div>
         <div className="flex gap-2">
         <strong>•</strong>
         <p> Celebrate success: Highlight how the funds raised helped you achieve your educational goal.</p></div>
         </div>
          </div>

      </div>
      

      {/* <button className="bg-[#28A745] rounded-[8px] border py-3 px-4 text-white">Create a Campaign</button> */}

         {/* Conditionally render the button */}
         {showCreateCampaignButton && (
          <button className="bg-[#28A745] rounded-[8px] border py-3 px-4 text-white">
            Create a Campaign
          </button>
        )}
   
      </div>

    </div>
  )
}

export default HowItWorks