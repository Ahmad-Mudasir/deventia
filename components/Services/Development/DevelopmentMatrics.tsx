import React from 'react'
import developmentMatrics from "../../../assets/images/DevelopmentMatrics.jpg";
import Image from 'next/image';
function DevelopmentMatrics() {
  return (
    <div className=' px-16'>
         <Image
          src={developmentMatrics}
          alt="banner"
          className="object-cover h-[400px] w-full"
        />
    </div>
  )
}

export default DevelopmentMatrics