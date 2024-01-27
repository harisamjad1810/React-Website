import React from 'react'
import Common from './Common'
import about from "../src/images/about.webp";

function About() {
  return (
      <>
      <Common
         name="Welcome To About Page"
         imgsrc={about}
         btnname="Contact Now"
         btnhref="/Contact" />
      </>
  )
}

export default About