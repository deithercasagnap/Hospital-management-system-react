import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
//value is the about us page
import AboutUs from "../components/LandingPageComponents/AboutUs";
//value is the our team page
import Value from "../components/LandingPageComponents/Value";
//value is the contact us page
import Footer from "../components/LandingPageComponents/Footer";


//value is the navbar
import Jobs from "../components/LandingPageComponents/Jobs";

//value is the navbar
import NavBar2 from "../components/LandingPageComponents/NavBar2";

//value is the navbar
import NavBar from "../components/LandingPageComponents/NavBar";

import LoginDoctorDiv from "../components/LoginDoctorComponents/LoginDoctorDiv";
import LoginPatientDiv from "../components/LoginPatientComponents/LoginPatientDiv";
import HomeDoctor from "../pages/HomeDoctor";
import DoctorNavbar from "../components/DoctorLandingPageComponents/DoctorNavbar";
import Notification from "../components/DoctorLandingPageComponents/Notification";
import Appointment from "../components/DoctorLandingPageComponents/Appointment";

const LandingPage = React.lazy(() => import("../pages/LandingPage"));


export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="#job" element={<Jobs />} />
          <Route path="/logindoctordiv" element={[<NavBar2/>,<LoginDoctorDiv />]} />
          <Route path="/loginpatientdiv" element={[<NavBar2/>,<LoginPatientDiv />]} />
          <Route path="#aboutus" element={<AboutUs />} />
          <Route path="#ourteam" element={<Value />} />
          <Route path="#contactus" element={<Footer />} />
          <Route path="/homedoctor" element={<HomeDoctor  />} />
          <Route path="/notification" element={[<DoctorNavbar/>,<Notification/>]} />
          <Route path="/appointment" element={[<DoctorNavbar/>,<Appointment/>]} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
