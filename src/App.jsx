import React from 'react'
import TopBanner from './components/TopBanner'
import MainBanner from './components/MainBanner'
import WorkshopSchedule from './components/WorkshopSchedule'
import FormBox from './components/FormBox'
import LaunchBox from './components/LaunchBox'
import DoDont from './components/DoDont'
import Previews from './components/Previews'
import JoinWorkshop from './components/JoinWorkshop'
import ProfileCard from './components/ProfileCard'
import Feature from './components/Feature'
import BonusSection from './components/BonusSection'
import Faq from './components/Faq'
import Register from './components/Register'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-poppins flex flex-col justify-center items-center bg-smoke_bg'>
      <TopBanner/>
      <MainBanner/>
      <WorkshopSchedule/>
      <FormBox/>
      <LaunchBox/>
      <DoDont/>
      <Previews/>
      <ProfileCard/>
      <JoinWorkshop/>
      <Feature/>
      <BonusSection/>
      <Faq/>
      <Register/>
      <Footer/>
    </div>
  )
}

export default App
