import React from 'react'
import '../Styles/HomeStyle.css'
import mag from '../Assets/magnifyingglass.jpg'

const PageOneComponent = () => {
  return (
    <div>
      <div className='d-flex justify-content-center topS'>
        <img src={mag} alt='magnifying glass' className='smallH' />
      </div>
      <div className='topS'>
       <h1 className='text-center regH'>Criminal Investigator</h1>
      </div >
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills Needed</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >At least 1 year experience, in or related to investigative methods and law enforcement techniques. Includes experience in exercising initiative; attention to detail; judgment in collecting, assembling and developing facts, evidence or other pertinent data; the ability to analyze and evaluate data or evidence to arrive at sound conclusions including applying new information; and the ability to partner with or lead others in the accomplishment of mission activities.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills I Have Now</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Investigative and observing skills</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Goals In the Job</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > To Conduct criminal investigations, plan and implement security designs, and provide protection to specific protectees.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Benefits</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Federal employee benefits, health, dental, vision, life, long-term care insurance; retirement plan; Thrift Savings Plan similar to a 401(k); Flexible Spending Account; Employee Assistance Program; personal leave days; and paid federal holidays. Starting salary for special agent starts at around $52,900 annually but may be increased up to $158,000 with promotion potential.</p>
      </div>
    
      <div className='mSpace'>
        <h2 className='subH padMe'>Location</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > They have multiple locations, there are vacant spots open in Anchorage, AK and a few in Alabama. Onsite.</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Work Culture</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > There are a lot of expectations that must be met to qualify for this job, as well as an ability to handle stressful situations well</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Resources</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini' />
        </div>
        <div className='xSpace'>
      <a className='padMe oSpace' href='https://www.usajobs.gov/job/752359100'> Listing for Criminal Investigator Special Agent from The Department of Homeland Security </a>
        </div>
      </div>

    </div>
    
  )
}

export default PageOneComponent
