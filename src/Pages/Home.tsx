import React from 'react'
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import FromTheCloud from '../Components/FromTheCloud'

function Home() {
  return (
    <>
      <Carousel />
      <FromTheCloud/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Home