import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import searchbutton from "../../assets/searchbutton.svg"
import Header from "./Header";
import LandingPageBg from "../../assets/LandingPageBg.jpeg"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  width: 996px;
  height: 332px;
  position: relative;
  top: 64px;
  left: 222px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 76.8px;
  color: black;
  margin: 0;
`;

const HighlightedText = styled.span`
  color: #ffd700; 
`;

const Subtitle = styled.span`
  font-family: "Roboto, sans-serif";
  font-size: 24px;
  font-weight: 400;
  color: white;
  text-align: center;
`;

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-cover bg-center bg-white"
   
    >
    <Header/>
    <Container>
      <TitleWrapper >
        <Title>
          Empower <HighlightedText>Education</HighlightedText> Through
        </Title>
        <Title>Crowdfunding</Title>

       
      </TitleWrapper>
      <Subtitle>Join the community supporting education across the globe.</Subtitle>

      <div className="">

      <div style={{display: 'flex', gap: '1rem', }}>
            
            <button 
            onClick={()=>navigate("/start-donating")}
            style={{ fontFamily: 'Roboto, sans-serif', 
        fontWeight: 600, 
        fontSize: '16px', 
        lineHeight: '19.2px', 
        letterSpacing: '0.25%', 
        color: 'white',
         
        backgroundColor: '#28A745', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer' }}>Donate to Crowdfunding</button>
            
            <button 
            onClick={()=>navigate("/start-funding")}
            
            style={{fontFamily: 'Roboto, sans-serif', 
        fontWeight: 600,
        
        fontSize: '16px', 
        lineHeight: '19.2px', 
        letterSpacing: '0.25%', 
        color: '#17A2B8',  
        backgroundColor: 'transparent',
        border: '1px solid #17A2B8',
        
        padding: '10px 20px',  
        borderRadius: '5px', 
        cursor: 'pointer'}}>Start a Fundraiser</button>
            </div>
    
            <div className="relative mt-6 w-full max-w-md">
            <img
              src={searchbutton}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search for educational campaigns, schools, or projects..."
              className="w-full pl-10 pr-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-[#808991]"
            />
            </div>
          </div>
    </Container>

</div>
  );
}

export default Hero;
