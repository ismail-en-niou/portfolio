import React from 'react';
import './hero.css';
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./Untitled-1-modified.png"className='avatar' alt=""  />
          <div className='icon-verified'></div>
        </div>


        <h1 className='title'>
          Software designer , Founder and amateur cryptage   
        </h1>
        <p>
        Ismail En-Niou is an experienced 
        frontend developer with a strong proficiency 
        in HTML, CSS,  JavaScript , php , c and react.js  . With 1 years of experience
         in the industry,Ismail is well-versed in various frontend frameworks
          and has worked on a range of projects
         across different industries
        </p>
          <div className="all-icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github-square"></div>
            <div className="icon icon-linkedin-square"></div>
          </div>

      </div>

      <div className="right-section animation border">
        aa
      </div>
    </section>
  )
}
