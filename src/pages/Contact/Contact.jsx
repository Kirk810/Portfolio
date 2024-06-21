import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hfxk4om",
        "template_xcenips",
        formData,
        "qapCsTc4Yjd_dnzEs"
      )
      .then((response) => {
        console.log("Email send", response.status, response.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Email send wrong", err);
      });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder=""
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="placeholder">Name</label>
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="placeholder">Email</label>
        </div>
        <div className="input-container">
          <textarea
            name="message"
            placeholder=""
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label className="placeholder">Message</label>
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
