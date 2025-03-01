import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignupPage from './pages/SignupPage';
import FundraisingPage from './pages/FundraisingPage';
import DonationsPage from './pages/DonationsPage';
import AboutusPage from './pages/AboutusPage';
import VolunteerPage from './pages/VolunteerPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/sign-up' element={<SignupPage/>}/>
      <Route path='/aboutus' element={<AboutusPage/>}/>
      <Route path='/volunteer' element={<VolunteerPage/>}/>
      <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
      <Route path='/start-funding' element={<FundraisingPage/>}/>
      <Route path='/start-donating' element={<DonationsPage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
