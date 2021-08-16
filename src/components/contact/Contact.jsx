import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
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
        </div>
      </div>
    </div>
  );
}
