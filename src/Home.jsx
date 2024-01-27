import React from 'react'
import web from "../src/images/img.webp";
import Common from './Common'

function Home() {
    return (
        <>
  <Common
         name="Grow Your Buisness"
         imgsrc={web}
         btnname="Get Started"
         btnhref="/About" />
      </>
    )
}


export default Home