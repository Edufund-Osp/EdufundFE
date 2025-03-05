import johnson from "../../assets/johnson.svg";
import daniel from "../../assets/daniel.svg";
import sarah from "../../assets/sarah.svg";
import angleleft from "../../assets/angleleft.svg";
import angleright from "../../assets/angleright.svg";

const testimonials = [
  {
    id: 1,
    image: sarah,
    name: "Sarah Thompson",
    profession: "Teacher",
    story: "Success Stories: Transforming Education, One Campaign at a Time",
    impact: "Discover the powerful impact of our educational campaigns. From building libraries to providing scholarships, these stories showcase how community support and donations have made a difference in the lives of students, educators, and schools around the world."
  },
  {
    id: 2,
    image: daniel,
    name: "Daniel Wright",
    profession: "Community Leader",
    story: "Thanks to the incredible support of our donors, we built a library that serves over 300 students in our rural community. Now, children have access to books and resources they never had before!",
    impact: "Impact: Over 300 students now have access to books, learning materials, and a safe place to study after school.",
    fundsRaised: "$60,000"
  },
  {
    id: 3,
    image: johnson,
    name: "Johnson Lee",
    profession: "Education Advocate",
    story: "Our scholarship program has helped dozens of students from low-income families attend college. Seeing their success makes every effort worthwhile.",
    impact: "Impact: 25 students received full scholarships and are now pursuing higher education.",
    fundsRaised: "$80,000"
  }
];

function Testimonials() {
  return (
    <div className=' flex justify-center'>
      <div className='flex flex-col items-center gap-6 justify-center  w-[1240px]'>
      <div className='flex flex-col items-center w-[85%]  '>
      <p className='font-roboto text-[24px] font-600 text-center'>Success Stories: Transforming Education, One Campaign at a Time</p>
      <p className='text-center font-roboto text-[16px] font-400 text-[#000]'>Discover the powerful impact of our educational campaigns. From building libraries to providing scholarships, these stories showcase how community support and donations have made a difference in the lives of students, educators, and schools around the world</p>
      </div>

      <div>

     
      <div className='flex gap-6 justify-center'>

      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className='bg-white p-4 rounded-lg shadow-md w-[390px]'>
          <div className='flex items-center gap-2'>
            <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full' />
            <div className='flex flex-col'>
              <div className='font-bold'>{testimonial.name}</div>
              <div className='text-sm text-gray-500'>{testimonial.profession}</div>
            </div>
          </div>
          <p className='mt-2 font-semibold'>{testimonial.story}</p>
          <p className='mt-1 text-sm text-gray-600'>{testimonial.impact}</p>
          {testimonial.fundsRaised && <p className='mt-1 font-medium'>Funds Raised: {testimonial.fundsRaised}</p>}
        </div>
      ))}
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

export default Testimonials;