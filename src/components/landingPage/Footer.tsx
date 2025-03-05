import { Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#11451D] px-4 py-12 md:px-8 lg:px-16 flex items-center justify-center">
      <div className="flex flex-col space-y-12  max-w-[1220px] ">
        {/* First main div - containing 5 divs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* 1st div - EduFund */}
         
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">EduFund</h3>
              <p className="text-white">
                Empower education by starting a fundraising campaign or supporting others in their educational journey.
              </p>
            </div>
        

          {/* 2nd div - Quick Links */}
         <div className='flex gap-6'>
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <a href="#" className="text-white hover:text-green-500">Start a Fundraiser</a>
              <a href="#" className="text-white hover:text-green-500">Donation</a>
              <a href="#" className="text-white hover:text-green-500">Volunteer</a>
            </div>
          

          {/* 3rd div - About Us */}
        
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">About Us</h3>
              <a href="#" className="text-white hover:text-green-500">Our Mission</a>
              <a href="#" className="text-white hover:text-green-500">How It Works</a>
              <a href="#" className="text-white hover:text-green-500">Success Stories</a>
            </div>
       

          {/* 4th div - Legal */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">Legal</h3>
              <a href="#" className="text-white hover:text-green-500">Privacy Policy</a>
              <a href="#" className="text-white hover:text-green-500">Terms of Service</a>
              <a href="#" className="text-white hover:text-green-500">FAQs</a>
            </div>
         

          </div>

          {/* 5th div - Subscribe */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-xl font-bold text-white">Subscribe to our newsletter</h3>
              <p className="text-white">
                Get the latest campaign, donation, and success stories, sent to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
       
        </div>

        {/* Second main div - Social media */}
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-red-600">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-white hover:text-green-500">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Third main div - Divider and copyright */}
        <div className="flex flex-col space-y-6">
          <hr className="border-gray-300" />
          <p className="text-center text-white">
            © 2024 FundMe Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;