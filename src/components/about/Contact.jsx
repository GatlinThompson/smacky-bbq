import Header from "../../elements/Header";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const messageChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <section className="contact">
      <Header title="Contact Us" subHeader={true} addClass={"contact-header"} />
      <form onSubmit={submitHandler} className=" mx-auto col-11 col-lg-6">
        <div className="contact-info">
          <Input title="Full Name" value={name} onChange={nameChange} />
          <Input
            title="Email"
            type="email"
            value={email}
            onChange={emailChange}
          />
          <Input
            title="What you like us to hear?"
            textarea={true}
            rows="10"
            value={message}
            onChange={messageChange}
          />
        </div>
        <div className="mb-3 mt-5 text-center col-12">
          <Button
            title={"Send Message"}
            type={"submit"}
            addedClass={"create-button"}
          />
        </div>
      </form>
    </section>
  );
};
export default Contact;
