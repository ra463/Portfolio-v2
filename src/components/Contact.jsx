import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact_div">
      <div className="contact_inner">
        <span>5. Ready to Start?</span>
        <h1>Get In Touch</h1>
      </div>
      <div className="contact_para">
        <p>
          You can contact me anytime for any kind of query or any kind of
          information. I'm always ready to help you. Below is my mail id, you
          can leave a mail. I'll reply you as soon as possible.
        </p>

        <a href="mailto:rachitp509@gmail.com">Let's Talk</a>
      </div>
    </div>
  );
};

export default Contact;
