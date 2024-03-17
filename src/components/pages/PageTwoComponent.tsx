import React from 'react'
import '../Styles/HomeStyle.css'
import light from '../Assets/lightbox.jpg'

const PageTwoComponent = () => {
  return (
    <div>
      <div className='d-flex justify-content-center topS'>
        <img src={light} alt='person drawing over a lightbox, often used in animation' className='smallH' />
      </div>
      <div className='topS'>
       <h1 className='text-center regH'>Concept Artist</h1>
      </div >
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills Needed</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Mastery of Photoshop, strong knowledge of specific areas of art (color theory, anatomy, etc), and over 5 years of experience in a relevant field.</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Skills I Have Now</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Experience in making art and developing illustrations from concept to sketch to final product; as well as attention to detail, a passion for art, and the ability to adapt to other styles.
</p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Goals In the Job</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Gaining knowledge of and honing skills with 3d programs and art, working with other creative people in teams, and gaining more art industry knowledge </p>
      </div>
      <div className='mSpace'>
        <h2 className='subH padMe'>Benefits</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' >A full range of medical, financial, and/or other benefits, which are more detailed if you apply, as well as a New York pay range of $85,000 - $120,000.</p>
      </div>
    
      <div className='mSpace'>
        <h2 className='subH padMe'>Location</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Manhattan, New York. Onsite, possibly Hybrid.</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Work Culture</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini'/>
        </div>
      <p className='padMe oSpace' > Rockstar Games aims to create an inclusive and creatively-driven environment where you can work with many other talented and creatively-minded people.</p>
      </div>

      <div className='mSpace btmP'>
        <h2 className='subH padMe'>Resources</h2>
        <div className='d-flex justify-content-center'>
        <hr className='mini' />
        </div>
        <div className='xSpace'>
      <a className='padMe oSpace' href='https://boards.greenhouse.io/rockstargames/jobs/5881274003'> Listing for Illustrator from RockStar Games </a>
        </div>
      </div>

    </div>
  )
}

export default PageTwoComponent
