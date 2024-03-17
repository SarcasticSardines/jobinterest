import React from 'react'
import '../Styles/HomeStyle.css'
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import main from '../Assets/BABA_GIF.webp'
import BigButtonsComponent from '../BigButtonsComponent'

const HomePageComponent = () => {
  return (
    <div>
      <div className='d-flex justify-content-center mx-5 bg'>
        <img src={main} alt='GIF of BABA from the game BABA IS YOU' className='mainH' />
      </div>
      <div>
       <h1 className='text-center'>Job Interest</h1>
      </div >
      <div className='nSpace'>
      <p className='padMe' >My name is Avery Hillstrom, and this application is to share and display some of the jobs I am currently interested in, even if I don't qualify to apply for them at the moment. This is a basic web application built in React JS.</p>
      </div>
      <BigButtonsComponent />

    </div>
  )
}

export default HomePageComponent
