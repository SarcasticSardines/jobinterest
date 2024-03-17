import React from 'react'
import '../Styles/HomeStyle.css'
import tape from '../Assets/csitape.jpg'

const PageFourComponent = () => {
  return (
    <div>
      <div className='d-flex justify-content-center topS'>
        <img src={tape} alt='crime scene tape' className='medH' />
      </div>
      <div className='topS'>
       <h1 className='text-center regH'>Crime Scene Technician</h1>
      </div >
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills Needed</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Bachelors in a Natural Science, Criminal Justice, or other related field.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills I Have Now</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Over 1 year of experience in the field of photography.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Goals In the Job</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Document, collect, and preserve all kinds of evidence from different crime scenes to assist in processing crimes.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Benefits</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Medical, Dental, and Vision, 401a, Retiree Health Savings Account, 12 paid holidays, pto, tuition reimbursement, professional development opportunities, Comprehensive Wellness program, Employee Assistance Program counselors, voluntary benefits, and $57,000 - $74,000 annual pay range.</p>
      </div>
    
      <div className='mSpace'>
        <h2 className='subH padMe'>Location</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Grand Rapids, Michigan. Onsite</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Work Culture</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >As this job is through a police department, there is a certain level of professionalism and stress present at almost all times.</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Resources</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini' />
        </div>
        <div className='xSpace'>
      <a className='padMe oSpace' href='https://www.governmentjobs.com/careers/grandrapids/jobs/4431614/crime-scene-technician'> Listing for Crime Scene Technician from the City of Grand Rapids </a>
        </div>
      </div>

    </div>
  )
}

export default PageFourComponent
