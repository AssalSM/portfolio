import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnzgev");


  return (
    <section className="contact-us">
      <div>
        <h1 className="title">
          <span>
            <i className="material-icons-outlined sd">message</i>
          </span>
          contact us
        </h1>
        <p className="sub-title">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message"> your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting..." : "submit"}
          </button>
          {state.succeeded &&( <p>Thanks for joining!</p>)}
        </form>
        <div className=" animation"></div>
      </div>
    </section>
  );
};
export default Contact;
