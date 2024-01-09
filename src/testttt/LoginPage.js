import React from 'react'
import './Page.css';
import imageEarth from '../assets/images/img_earth.png';
import iconEmail from '../assets/images/ic_email.svg';
import iconPass from '../assets/images/ic_password.svg';
import iconButton from '../assets/images/ic_button_login.svg';


function Page1() {
  return (
    <div className='container'>
      <div className='boxContent'>
        <div className='boxImageEarth'>
          <img className='imageEarth' src={imageEarth} alt='Earth' />
        </div>
        <div className='boxLogin'>
          <div className='txtLogin'>Log in</div>
          <div className='txtContentLogin'>Log in to your VPN Server</div>
          <div className="boxTextInput mrt64">
            <img className="iconEmail" src={iconEmail} alt="Icon" />
            <div className='line1' />
            <input className="inputEmail" type="email" placeholder="Email Address" />
          </div>
          <div className="boxTextInput mrt24">
            <img className="iconEmail" src={iconPass} alt="Icon" />
            <div className='line1' />
            <input className="inputEmail" type="password" placeholder="Password" />
          </div>

          <button className="btnLogin mrt24">
            <div className="txtButton">Continue</div>
            <img src={iconButton} alt="Icon" className="iconButton" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page1