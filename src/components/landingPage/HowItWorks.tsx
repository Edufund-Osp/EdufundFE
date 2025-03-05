import startcampaign from "../../assets/startcampaign.svg";
import sharewithnetwork from "../../assets/sharewithnetwork.svg";
import raisefunds from "../../assets/raisefunds.svg";



function HowItWorks() {
  return (
    <div className='flex flex-col items-center justify-center mb-6'>
      <div className='w-[1240px] flex flex-col gap-6 items-center '>
      <div className='flex flex-col gap-2 items-center w-[85%]'>
      <p className='font-roboto text-[24px] font-600 text-center'>How It Works: Start Your Education Campaign in Three Simple Steps</p>
      <p className='text-center font-roboto text-[16px] font-400 text-[#000]'>Launching your fundraising campaign is easy! Follow these three simple steps to begin raising funds for your educational goals, share your story with your community, and make an impact with the support you need</p>
      </div>

    
      <div className='flex justify-center gap-6  w-full'>
      <div className='flex flex-col w-[390px] border-white rounded-2xl bg-white p-4 '>
      <div className='flex flex-col items-center justify-center bg-[#11451D] w-full h-[111px] border rounded-2xl'>
          <img src={startcampaign}/>
          <p className='text-white'>01</p>
         <p className='text-white'>Start a Campaign</p></div>
         <div>
         <p><strong>•</strong> Create an account and fill in your basic details.</p>
          <p><strong>•</strong> Explain why you need help—whether it's for school supplies, a project, or an event. Share your story so people understand why it's important.</p> 
         <p><strong>•</strong> Set your fundraising goal—the amount you hope to raise. Once you're done, your campaign is live and ready to receive donations.</p> 
         </div>
          </div>


          <div className='flex flex-col w-[390px] border-white rounded-2xl bg-white p-4'>
          <div className='flex flex-col items-center justify-center bg-[#11451D]  w-full h-[111px] border rounded-2xl'>
          <img src={sharewithnetwork}/>
          <p className='text-white'>02</p>
         <p className='text-white'>Share with your network</p></div>
         <div>
         <p><strong>•</strong> Create an account and fill in your basic details.</p>
          <p><strong>•</strong> Explain why you need help—whether it's for school supplies, a project, or an event. Share your story so people understand why it's important.</p> 
         <p><strong>•</strong> Set your fundraising goal—the amount you hope to raise. Once you're done, your campaign is live and ready to receive donations.</p> 
         </div>
          </div>

          <div className='flex flex-col w-[390px]  rounded-2xl bg-white border-white p-4'>
          <div className='flex flex-col items-center justify-center bg-[#11451D]  w-full h-[111px]  rounded-2xl'>
          <img src={raisefunds}/>
          <p className='text-white'>03</p>
         <p className='text-white'> Raise Funds</p></div>
         <div>
         <p><strong>•</strong> Create an account and fill in your basic details.</p>
          <p><strong>•</strong> Explain why you need help—whether it's for school supplies, a project, or an event. Share your story so people understand why it's important.</p> 
         <p><strong>•</strong> Set your fundraising goal—the amount you hope to raise. Once you're done, your campaign is live and ready to receive donations.</p> 
         </div>
          </div>

      </div>
      
   
      </div>

    </div>
  )
}

export default HowItWorks