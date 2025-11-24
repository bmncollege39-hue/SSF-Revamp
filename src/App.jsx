import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Getinvolved from './components/GetInvolved'
import Aboutus from './components/Aboutus'
import KeyFocus from './pages/KeyFocus'
import Team from './pages/Team'
import Collabrations from './pages/Collabrations'
import Impactstories from './components/ImpactStories'

const App = () => {
  return (
    <div className='min-h-screen w-full flex justify-start flex-col items-center font-inria px-4 overflow-x-hidden'>
      {/* Header Page */}
      <Header/>
      {/* Home Page */}
      <Home/>
      {/* Get Involved Page */}
      <Getinvolved/>
      {/* About us Page */}
      <Aboutus/>
      {/* Key focus Page */}
      <KeyFocus />
      <Impactstories></Impactstories>
      <Team />

      <Collabrations />

    </div>
  )
}

export default App