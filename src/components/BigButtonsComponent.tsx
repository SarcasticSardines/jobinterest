import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/HomeStyle.css'
import { useNavigate } from 'react-router-dom';

function BigButtonsComponent() {
  const navi = useNavigate();

 
  const linkOne = () =>{
    navi('/one')
  }
  const linkTwo = () =>{
    navi('/two')
  }
  const linkThree = () =>{
    navi('/three')
  }
  const linkFour = () =>{
    navi('/four')
  }
  const linkFive = () =>{
    navi('/five')
  }

  return (
    <>
    <div className='d-flex justify-content-center'>
      <button onClick={linkOne} className='beeg'>Criminal Investigator</button>
      </div>
      <div className='d-flex justify-content-center'>
      <button onClick={linkTwo} className='beeg'>Concept Artist</button>
      </div>
      <div className='d-flex justify-content-center'>
      <button onClick={linkThree} className='beeg'>Computer Forensic Analyst</button>
      </div>
      <div className='d-flex justify-content-center'>
      <button onClick={linkFour} className='beeg'>Crime Scene Technician</button>
      </div>
      <div className='d-flex justify-content-center'>
      <button onClick={linkFive} className='beeg'>Technical Artist</button>
      </div>
    </>
  );
}

export default BigButtonsComponent;