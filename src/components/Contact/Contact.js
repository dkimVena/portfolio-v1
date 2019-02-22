import React from 'react';

const Contact = () => (
  <section className="section-contact row">
    <div className="col-12 pt-lg-3 mb-4 px-4 contact">
      <h1 id="contact__heading-primary">EMAIL ME</h1>
      <h2 id="contact__heading-secondary">
        <div>For business inquiries or any other inquiries,</div>
        <div>please use this form.</div>
      </h2>
      <form
        className="contact__form"
        method="POST"
        action="https://formspree.io/david.ingook@gmail.com"
      >
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit" className="btn btn-sm btn-outline-secondary">
          Send
        </button>
      </form>
    </div>
  </section>
);
export default Contact;
