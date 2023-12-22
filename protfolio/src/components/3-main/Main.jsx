import React from 'react';
import './main.css';

export default function Main() {
  return (
    <main className='flex'>
      <section className="flex  left-section">
        <button className='active'>All project</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React & MUI</button>
        <button>Node & Express</button>
      </section>
      <section className="flex right-section">

       {["aa","bb","cc", 3,7].map((item)=>{
        return (
          <article key={item} className='card'>
          <img width={266} src="./ecome.png" alt="" />
          <div style={{width:"266px"}} className="box">
            <h1 className='title'> Ecome Site-web </h1>
            <p className='sub-title'>
         
            - Responsive Ecommerce Website Tutorial Using HTML CSS & JavaScript. <br />
            - Multipage Ecommerce Website Project.<br />
            -build amazing professional and responsive websites.<br />
            - Modern CSS, including flexbox and CSS Grid for layout.<br />
            

            </p>
            <div className="flex icons">
              <div style={{gap:"11px"}} className='flex'>
              <div className="icon-link"></div>
              <div className="icon-github-square"></div>
              </div>
              <a href="" className='link flex'>
                more <span style={{alignSelf :"end"}} className="icon-arrow_forward "></span>
              </a>
            </div>
          </div>
      </article>
        );
       })}
        
      </section>
    </main>
  )
}
