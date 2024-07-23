import React from 'react'
import Hero from '@/components/Services/Development/Hero'
import FullStackDevelopment from '@/components/Services/Development/FullStackDevelopment'
import DevelopmentSupport from '@/components/Services/Development/DevelopmentSupport'
import DevelopmentMatrics from '@/components/Services/Development/DevelopmentMatrics'
import RequestDevelopmentServices from '@/components/Services/Development/RequestDevelopmentServices'

function page() {
  return (
    <div>
        <Hero/>
        <FullStackDevelopment/>
        <DevelopmentSupport/>
        <DevelopmentMatrics/>
        <RequestDevelopmentServices/>
    </div>
  )
}

export default page