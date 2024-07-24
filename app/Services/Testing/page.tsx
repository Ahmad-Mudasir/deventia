import React from 'react'
import Hero from '@/components/Services/Testing/Hero'
import TestingSection from '@/components/Services/Testing/TestingSection'
import PerfomanceMetrics from '@/components/Services/Testing/PerfomanceMetrics'
import LetsGetInTouch from '@/components/Services/Testing/LetsGetInTouch'
function page() {
  return (
    <div>
        <Hero/>
        <TestingSection/>
        <PerfomanceMetrics/>
        <LetsGetInTouch/>
    </div>
  )
}

export default page