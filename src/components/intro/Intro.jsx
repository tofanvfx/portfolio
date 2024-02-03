import React from 'react';
import './Intro.css'
import bg from '/image.png'
import btnImg from '/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Tofan</span><br />Front-end Developer</span>
            <p className="introPara">I'm a Front-end Developer who loves combining creativity with code <br /> to make visual magic. I'm particularly passionate about 3D and VFX,<br /> where I bring a blend of technical skills and artistic flair.</p>
            <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro;