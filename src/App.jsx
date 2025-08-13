import Profile from "./components/Profile";
import profileImage from "./assets/aboutme-image.jpg"

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={profileImage}
        name="Douglas Vega"
        bio="Full-stack javascript developer at Microsoft"
        tel="+55 21 9 9999-9999"
        email="douglas.vega@microsoft.com"
        githubUrl="https://github.com/vegadev98"
        linkedinUrl="https://www.linkedin.com/in/douglas-da-silva-vega"
        instagramUrl="https://www.instagram.com/dvegaa_"
      />
    </div>
  )
}