import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 6px;
  
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.25%;
`;

const Button = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 43px;
  border-radius: 4px;
  cursor: pointer;
`;

const DonateButton = styled(Button)`
  background-color: #28a745;
  color: white;
`;

const LoginButton = styled(Button)`
  background-color: white;
  color: #28a745;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div>
        <p className="text-[#28A745] font-roboto text-[28px] font-700">EduFund</p>
      </div>
      <NavLinks>
        <div>Start a Fundraiser</div>
        
        <button onClick={()=>navigate("/volunteer")}>Volunteer</button>
        <button onClick={()=>navigate("/aboutus")}>About us</button>
      </NavLinks>
      <div className="flex gap-6">
        <DonateButton onClick={()=>navigate("/start-donating")}>Donate</DonateButton>
        <LoginButton onClick={()=>navigate("/signin")}>Log In</LoginButton>
      </div>
    </HeaderContainer>
  );
}

export default Header;
