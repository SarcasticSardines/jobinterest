import React from 'react'
import '../Styles/HomeStyle.css'
import phone from '../Assets/phonehack.jpg'

const PageThreeComponent = () => {
  return (
    <div>
      <div className='d-flex justify-content-center topS'>
        <img src={phone} alt='phone being hacked into' className='medH' />
      </div>
      <div className='topS'>
       <h1 className='text-center regH'>Computer Forensic Analyst</h1>
      </div >
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills Needed</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Considerable knowledge on constructing and dissembling computers, working knowledge of computer operating systems other than Windows, (Linux and Unix); of criminal laws of the Commonwealth; of methods and techniques of conducting criminal investigations; and of the judicial system; skill in using multiple versions of Windows operating systems, in assembling and disassembling computers and other digital devices, in troubleshooting basic hardware and software problems, and the demonstrated ability to use forensic software applications and hardware to analyze electronically stored data.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills I Have Now</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > High school diploma and combination of some of the training and experience related to the responsibilities of the position.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Goals In the Job</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Conducting digital examinations on behalf of the High-Tech Crimes Division for any law enforcement entity in Virginia, prepares evidence, reports, letters, and other correspondence; and instructs law enforcement officers in proper digital forensic techniques and evidence handling.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Benefits</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Salaried for full time work. Additional details were not available until the application and hiring process began.</p>
      </div>
    
      <div className='mSpace'>
        <h2 className='subH padMe'>Location</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Chesterfield, Virginia. Onsite</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Work Culture</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >As this job is through a police department, there is a certain level of professionalism and seriousness to be held to.</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Resources</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini' />
        </div>
        <div className='xSpace'>
      <a className='padMe oSpace' href='https://www.jobs.virginia.gov/jobs/c19c7572-b13d-4882-986f-a14072c2e1dd'> Listing for Digital Forensic Examiner from the Department of State Police </a>
        </div>
      </div>

    </div>
  )
}

export default PageThreeComponent
