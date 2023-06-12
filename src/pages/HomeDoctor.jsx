import React from 'react'
import DoctorNavbar from '../components/DoctorLandingPageComponents/DoctorNavbar'
import DoctorHome from '../components/DoctorLandingPageComponents/DoctorHome'
import PatientTable from '../components/DoctorLandingPageComponents/PatientTable'
import CardDiv from '../components/DoctorLandingPageComponents/CardDiv'


const HomeDoctor = () => {
  return (
    <>
      <DoctorNavbar/>
      <DoctorHome/>
      <CardDiv/>
      <PatientTable/>
    </>
  )
}

export default HomeDoctor