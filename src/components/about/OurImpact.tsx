import React from 'react'

function OurImpact() {
  return (
    <div className='flex flex-col items-center justify-center mb-6'>
      <div className='w-[800px] flex flex-col gap-10 items-center '>
        <div>Our Impact</div>

        <div>Thousands of students and schools have secured the funding they need through our platform. Join us in making education accessible by supporting campaigns or starting one of your own.</div>
      </div>

      <div className="text-[#0A434C] flex justify-between items-center w-[85%] h-[130px] bg-[var(--Secondary-Secondary100)] px-8 border-white border-2">
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
  )
}

export default OurImpact