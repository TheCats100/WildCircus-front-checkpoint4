import React from 'react';

import './contact.css';

function Contact() {
  return (
    <div className="block">
      <form className="contactForm">
        <label for="nom">Name
          <input type="text" name="nom" id="nom" placeholder="PILANI Mario" required />
        </label>
        <label for="mail">E-mail
              <input type="email" name="mail" id="mail" placeholder="mail@example.com" required />
        </label>
        <label for="message">Message :
          <textarea id="message" name="message" placeholder="WildCircus is the best Circus !" required />
        </label>
        <button type="submit" className="contactSubmit" >Submit</button>
      </form>
    </div>
  )
};

export default Contact;