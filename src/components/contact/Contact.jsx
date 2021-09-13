import React from "react";
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
            <div className="image">
              <img src="assets/code/contact.svg" alt="" />
            </div>
            <div className="icons">
              <div className="icons-item-container">
                <Person style={{ fontSize: 18, marginRight: 10 }} />
                <span>+1 289 696 0360</span>
              </div>
              <div className="icons-item-container">
                <Mail style={{ fontSize: 18, marginRight: 10 }} />
                <span>natalieyu30@gmail.com</span>
              </div>
              <a
                href="https://github.com/natalieyu30"
                className="link icons-item-container"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub style={{ fontSize: 18, marginRight: 10 }} />
                <span>https://github.com/natalieyu30</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hyojung-yu-36b35612a/"
                className="link icons-item-container"
                target="_blank"
                rel="noreferrer"
                // style={{ display: "flex", alignItems: "center" }}
              >
                <LinkedIn style={{ fontSize: 20, marginRight: 10 }} />
                <span>https://www.linkedin.com/in/hyojung-yu-36b35612a/</span>
              </a>
            </div>
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
          <div className="image">
            <img src="assets/code/contact.svg" alt="" />
          </div>
          <div className="icons">
            <div
              className="icons-item-container"
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <Person style={{ fontSize: 18, marginRight: 10 }} />
              <span className="span">+1 289 696 0360</span>
            </div>
            <div
              className="icons-item-container"
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <Mail style={{ fontSize: 18, marginRight: 10 }} />
              <span className="span">natalieyu30@gmail.com</span>
            </div>
            <a
              href="https://github.com/natalieyu30"
              className="link icons-item-container"
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <GitHub
                style={{ fontSize: 18, marginRight: 10, marginBottom: 8 }}
              />
              <span className="span">https://github.com/natalieyu30</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hyojung-yu-36b35612a/"
              className="link icons-item-container"
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center" }}
            >
              <LinkedIn
                style={{ fontSize: 20, marginRight: 10, marginBottom: 8 }}
              />
              <span className="span">
                https://www.linkedin.com/in/hyojung-yu-36b35612a/
              </span>
            </a>
          </div>
        </div>
        <div className="right">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Name *"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email *"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject "
            />
            <ValidationError
              prefix="Subject"
              field="subject"
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
