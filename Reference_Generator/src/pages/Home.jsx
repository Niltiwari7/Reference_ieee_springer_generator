import React from 'react'
import Hero from '../components/Hero'
import ConversionTool from '../components/ConversionTool'
function Home() {
  return (
    <div >
        <div className='p-10 w-full'></div>
        <Hero/>
        <div className='p-10 w-full'></div>
        <ConversionTool/>
    </div>
  )
}

export default Home