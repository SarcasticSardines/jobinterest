import React from 'react'
import '../Styles/HomeStyle.css'
import brush from '../Assets/multimediabrush.jpg'

const PageFiveComponent = () => {
  return (
    <div>
      <div className='d-flex justify-content-center topS'>
        <img src={brush} alt='paint brushes' className='medH' />
      </div>
      <div className='topS'>
       <h1 className='text-center regH'>Technical Artist</h1>
      </div >
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills Needed</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > 5-7 years of professional or equivalent experience, proficiency with high-level coding languages, strong knowledge of industry standard DCC tools, able to demonstrate a core understanding of 3D development, experience with mobile gaming pipelines and other technical considerations; and experience using Perforce version control and automation server environments like Jenkins.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills I Have Now</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Experience with C# and Unity.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Goals In the Job</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Contributing to the development of Pokemon merchandise, games, and media; and satisfying Pokemon fans and customers.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Benefits</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Competitive cash-based compensation programs, Pokemon company events, 100% employer-paid healthcare premiums, generous paid family leave, employer-paid life insurance, employer-paid long and short-term income protection insurance, 401k Employer Matching, fitness reimbursement, and a comprehensive relocation package.</p>
      </div>
    
      <div className='mSpace'>
        <h2 className='subH padMe'>Location</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Bellevue, Washingotn. Hybrid</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Work Culture</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >Team first mentality, implementing integrity and respect, a dedication to quality, and a passion for Pokemon!</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Resources</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini' />
        </div>
        <div className='xSpace'>
      <a className='padMe oSpace' href='https://boards.greenhouse.io/pokemoncareers/jobs/5883402003?rx_source=Linkedin&s=LinkedIn&source=LinkedIn&rx_paid=1&gh_src=c2462bcf3us'> Listing for Technical Artist from The Pokemon Company International </a>
        </div>
      </div>

    </div>
  )
}

export default PageFiveComponent
