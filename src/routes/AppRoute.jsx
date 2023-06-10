import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
//value is the about us page
import AboutUs from "../components/LandingPageComponents/AboutUs";
//value is the our team page
import Value from "../components/LandingPageComponents/Value";
//value is the contact us page
import Footer from "../components/LandingPageComponents/Footer";

//value is the navbar
import NavBar from "../components/LandingPageComponents/NavBar";

import LoginDoctorDiv from "../components/LoginDoctorComponents/LoginDoctorDiv";
import LoginPatientDiv from "../components/LoginPatientComponents/LoginPatientDiv";
import HomeDoctor from "../pages/HomeDoctor";

const LandingPage = React.lazy(() => import("../pages/LandingPage"));


export default function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logindoctordiv" element={[<NavBar/>,<LoginDoctorDiv />]} />
          <Route path="/loginpatientdiv" element={[<NavBar/>,<LoginPatientDiv />]} />
          <Route path="/aboutus" element={[<NavBar/>,<AboutUs />]} />
          <Route path="/value" element={[<NavBar/>,<Value />]} />
          <Route path="/footer" element={[<NavBar/>,<Footer />]} />
          <Route path="/homedoctor" element={<HomeDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
