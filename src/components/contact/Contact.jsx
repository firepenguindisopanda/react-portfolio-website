import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wf5ex2f', 'template_0ouoimq', form.current, 'Mbp02i3iokIucc48d')
      .then((result) => {
        console.log(result.text);
      }
      , (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Want to collab on a project or get in touch?</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nicholas122008@hotmail.com</h5>
            <a href="mailto:nicholas122008@hotmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>686-4906</h5>
            <a href="https://api.whatsapp.com/send?phone=+18686864906" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name"  required/>
          <input type="email" name="email" placeholder="Your Email"  required/>
          <textarea name="message"  rows="7" placeholder="Your Message"  required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
