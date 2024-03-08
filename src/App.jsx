import './general.css';
import './header.css';
import './main-section.css';
import './middleSection.css';
import Devfolio_Normal from './header-imgs/Devfolio - Normal.png';
import notification_true from './header-imgs/notification-1-icon-404x512-88prt3ei.webp';
import notification_bell_icon from './header-imgs/notification-bell-icon.svg';
import logo from './middle-section imgs/logo.webp';
import mainImg from './main-section imgs/mainimg.webp';
export default function App(){
  return (
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>StackTooDeep| Devfolio</title>
  <link rel="stylesheet" href="header.css" />
  <link rel="stylesheet" href="middleSection.css" />
  <link rel="stylesheet" href="general.css" />
  <link rel="stylesheet" href="main-section.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <div className="header">
    <div className="left-section">
      <img src={Devfolio_Normal}/>
      <div className="home">Home</div>
      <div className="blog">Blog</div>
    </div>
    <div className="right-section">
      <img
        className="notification-icon"
        src={notification_true}
      />
      <img className="avatar" src={notification_bell_icon} />
      <div className="pf-name">xSenpaix</div>
    </div>
  </div>
  <div className="mid-section">
    <div className="title">
      <img src={logo} />
      <div className="titleName">StackTooDeep</div>
    </div>
    <div className="details">
      <div className="container">
        <div className="containerdiv">OVERVIEW</div>
        <div className="containerdiv">PRIZES</div>
        <div className="containerdiv">SPEAKERS &amp; JUDGES</div>
        <div className="containerdiv">SCHEDULE</div>
        <div className="containerdiv">PROJECTS</div>
      </div>
    </div>
  </div>
  <div className="main-section">
    <div className="main">
      <img className="mainimg" src={mainImg} />
    </div>
    <div className="s2d-main-info">
      <div className="s2d-info-container">
        <div className='container-contain'>
          <div className="blue-border"></div>
          <div className="s2d-info">
            <div className="runs">RUNS FROM</div>
            <div className="date">Mar 15 - 17, 2024</div>
            <div className="happening">HAPPENING</div>
            <div className="venue">Roorkee, India</div>
        </div>
      </div>      
      <div className='Application'>
        <div className='text'>Applications Open</div>
        <div className='Register'><button >Register Now</button></div>
        </div>
      <button className='projects'>See Previous Projects</button> 
      </div>  
    </div>
    <div className='about'>
      <p><b>StackTooDeep</b> is the inaugural ethereum focused hackathon conducted by Blockchain Society IIT Roorkee. It aims to foster a culture of web3 development in our campus and promotes decentralized innovation!</p>
      <p><b>Note: This hackathon is only for the students of IITR</b></p>
      <ul><b>Rules</b>
      <li>·  Follow the Code of Conduct.</li></ul>
      <p ></p>
    </div>
    <div className='contact'>
      Contact Us
    </div>
  </div>
 
</>

  )
}