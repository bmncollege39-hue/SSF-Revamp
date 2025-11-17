import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='min-h-screen w-full flex justify-start flex-col items-center'>
      <Header/>
      {/* make home page component and mount here */}
      <Home />

      {/* make getInvoled page component and mount here */}
    </div>
  )
}

export default App