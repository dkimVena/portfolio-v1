import React from 'react';

const Contact = () =>
  <div className="row">
    <div className="col-12 pt-lg-3 mb-4 px-4 portfolio-content" />
    <div className="col-12 pt-lg-3 mb-4 px-4 portfolio-content">
      <h1 id="Email-Me-Header">EMAIL ME</h1>
      <h2 id="Email-Me">For business inquiries or any other inquiries,<br />please use this form.</h2>
      <form className="contact-form" method="POST" action="https://formspree.io/david.ingook@gmail.com">
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>;
export default Contact;
