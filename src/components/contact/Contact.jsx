import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Person, Mail, GitHub, LinkedIn } from "@material-ui/icons";

import "./contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwkawlow");
  if (state.succeeded) {
    return (
      <div className="contact" id="contact">
        <div className="contact-wrap">
          <div className="left">
            <img src="assets/code/contact.svg" alt="" />
          </div>
          <div className="right success">
            <p>Thanks, I will reply ASAP! :)</p>
            <span>
              Back to <a href="#intro">Homepage</a>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // const [email, setEmail] = useState("");
  // const [text, setText] = useState("");
  // const [error, setError] = useState(false);
  // const [message, setMessage] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage(false);
  //   }, 3000);
  // }, [message]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError(false);

  //   if (email === "") {
  //     setError(true);
  //   }
  //   if (text === "") {
  //     setError(true);
  //   }

  //   if (email !== "" && text !== "") {
  //     setMessage(true);
  //     setError(false);
  //     setEmail("");
  //     setText("");
  //   }
  // };

  return (
    <div className="contact" id="contact">
      <div className="contact-wrap">
        <div className="left">
          <img src="assets/code/contact.svg" alt="" />
        </div>
        <div className="right">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              required
              placeholder="Please leave a message here..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              SEND
            </button>
          </form>
          <div className="icons">
            <div className="item-container">
              <Person style={{ fontSize: 18 }} />
              <span>+1 289 696 0360</span>
            </div>
            <div className="item-container">
              <Mail style={{ fontSize: 18 }} />
              <span>natalieyu30@gmail.com</span>
            </div>
            <div className="item-container">
              <a
                href="https://github.com/natalieyu30"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub style={{ fontSize: 18 }} />
                <span>https://github.com/natalieyu30</span>
              </a>
            </div>
            <div className="item-container">
              <a
                href="https://www.linkedin.com/in/hyojung-yu-36b35612a/"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn style={{ fontSize: 20 }} />
                <span>https://www.linkedin.com/in/hyojung-yu-36b35612a/</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
