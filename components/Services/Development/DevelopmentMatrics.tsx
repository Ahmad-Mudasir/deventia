import React from 'react'
import developmentMatrics from "../../../assets/images/DevelopmentMatrics.jpg";
import Image from 'next/image';
function DevelopmentMatrics() {
  return (
    <div className=' lg:px-16 md:p-10 p-5'>
         <Image
          src={developmentMatrics}
          alt="banner"
          className="object-cover lg:h-[400px] md:h-full h-full w-full"
        />
    </div>
  )
}

export default DevelopmentMatrics