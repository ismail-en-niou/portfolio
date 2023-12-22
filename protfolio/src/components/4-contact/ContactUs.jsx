import React from 'react';
import {  } from "./ContactUs.css";

export default function ContactUs(){
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-email'></span>
        Contact Us
      </h1>
      <p className='sub-title'>
        Contact Us for more information and get notified when I publish something new
      </p>
      <div className="flex">
        <form className=''>
        <div className='flex'>
        <label htmlFor="email">Email Adresse:</label>
        <input type="email"id="email" required />
        </div>

       <div className='flex' style={{marginTop :"26px"}}>
       <label htmlFor="message">Your Message</label>
        <textarea id="message" required></textarea>
       </div>

        <button className='submit' type="submit">Submit</button>
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  )
}
