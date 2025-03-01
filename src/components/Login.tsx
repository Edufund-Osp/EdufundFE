import React from 'react';
import { useNavigate } from 'react-router-dom';
import facebook from "../assets/facebook.svg"
import google from "../assets/google.svg"

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      {/* Left half with background image */}
      <div className="flex-1 bg-cover bg-center relative" style={{ backgroundImage: "url('/img/background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex items-center justify-center h-full">
          <div className="relative z-10 max-w-md p-8 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-lg">
              We're excited to have you here. Together, we can make a difference and support the future of education. Let's get started on making an impact!
            </p>
          </div>
        </div>
      </div>

      {/* Right half with sign in form */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Sign In</h2>
          
          <div className="space-y-6">
            <div>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
              />
            </div>
            
            <div>
              <input 
                type="password" 
                placeholder="Enter password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
              />
            </div>
            
            <button 
            onClick={()=>navigate("/")}

            className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
              Sign In
            </button>
            
            <button 
            onClick={()=>navigate("/forgot-password")}
            className=" w-full text-right text-[#17A2B8]">
            Forgot Password?
            </button>
            
            <button className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300">
              <img src={google} alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            
            <button 
            className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300">
              <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
              Sign in with Facebook
            </button>
            
            <div className="text-center text-gray-700">
              Don't have an account? 
              <button 
              onClick={()=>navigate("/sign-up")}
              className="text-green-500 hover:text-green-600 ml-1">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;