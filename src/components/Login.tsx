import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import eyeicon from "../assets/eyeicon.svg";
import mailimg from "../assets/mailimg.svg";

import { EyeOff } from "lucide-react";


const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex  p-5 gap-8 bg-black">
            {/* Left half with background image */}
            <div className="flex-1 bg-cover bg-center border rounded-lg relative" style={{ backgroundImage: "url('/img/background.jpg')" }}>
               
                <div className="flex h-[300px] mt-[510px] justify-center">
                    <div className="bg-red-500  z-10 max-w-md p-8 text-center text-white flex flex-col gap-4">
                        <div className="text-[24px] font-roboto font-700 mb-4 bg-[#11451D]">EduFund</div>
<div className='text-[28px] font-700 '>Empower Education Through Crowdfunding</div>

                        <div className="text-[14px] font-400 font-roboto ">
                        Education transforms lives, yet many students lack essential resources. EduFund helps bridge this gap by enabling crowdfunding for education-focused initiatives.
                        </div>
                    </div>
                </div>
            </div>

            {/* Right half with sign-in form */}
            <div className='flex flex-col  flex-1 bg-white pl-8 pt-8 w-[50%] border-white rounded-lg gap-20'>
            <div className="  ">
                <div className="w-[578px] p-6">
                    <h2 className="text-[28px] font-700 font-roboto mb-8 text-[#28A745]">EduFund</h2>
                    <div className='mb-10 font-700 font-roboto text-[24px] text-[#000000] mt-[80px]'>
                        <h2>Welcome back</h2>
                        <div className="text-[14px] text-left text-[#0A0B0A]">
                            Don't have an account? 
                            <button 
                                onClick={() => navigate("/sign-up")}
                                className="text-green-500 hover:text-green-600 ml-1"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h2>Enter Email Address</h2>
                        <div className="relative flex items-center">
  {/* Email Icon */}
  <div className="absolute left-3">
    <img src={mailimg} className="w-5 h-5" alt="Email Icon" />
  </div>

  {/* Email Input with extra left padding */}
  <input 
    type="email" 
    placeholder="Your email" 
    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
  />
</div>

                        <div className='flex flex-col gap-1'>
                            <h2>Enter Password</h2>
                            <div className='relative flex items-center'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Password" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                                />
                                <div 
                                    className='absolute right-4 cursor-pointer' 
                                    onClick={() => setShowPassword(!showPassword)}
                                >
   {showPassword ? <EyeOff size={20} /> : <img className="w-[20px]" src={eyeicon}/>}

                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={() => navigate("/forgot-password")}
                            className="w-full text-right text-[#17A2B8] text-[16px] font-600 font-roboto mb-5"
                        >
                            Forgot Password?
                        </button>

                        <button 
                            onClick={() => navigate("/")}
                            className="mb-3 w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Sign In
                        </button>

                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-3 text-gray-500 text-sm">Or sign with</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        <button className="mb-3 w-full py-3 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300">
                            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                            Sign in with Google
                        </button>

                        <button 
                            className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
                        >
                            <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                            Sign in with Apple
                        </button>
                    </div>
                </div>
            </div>

<div className="flex justify-end gap-4 w-full p-4">
              <div>Privacy Policy</div>
            <div>Support</div>
            </div>
            </div>
        </div>
    );
};

export default LoginPage;
