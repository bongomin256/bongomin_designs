/* eslint-disable no-undef */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "./Buttons";

const ContactForm = () => {
  //   const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [companyName, setCompanyName] = useState("");
  //   const [description, setDescription] = useState("");

  const form = useRef();

  const initialState = {
    fullName: "",
    email: "",
    companyName: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formDataParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      to_name: "Bongo",
      message: formData.description,
    };
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formDataParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Reset form fields after successful submission
        setFormData(initialState);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <form
      ref={form}
      action=""
      className="flex flex-col gap-4"
      onSubmit={submitForm}
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        required
        // value={fullName}
        // onChange={(e) => setFullName(e.target.value)}
        value={formData.fullName}
        onChange={inputHandler}
        className="py-3 pl-6 rounded-xl bg-heading-text text-white placeholder:text-[#023047] border-0 outline-0 active:bg-white focus:bg-white focus:text-[#023047] transition-colors duration-300 hover:bg-white"
      />
      <input
        type="email"
        name="email"
        id=""
        required
        // value={email}
        value={formData.email}
        onChange={inputHandler}
        placeholder="Your email address"
        className="py-3 pl-6 rounded-xl bg-heading-text text-white placeholder:text-[#023047] border-0 outline-0 active:bg-white  focus:bg-white focus:text-[#023047] transition-colors duration-300 hover:bg-white"
      />
      <input
        type="text"
        name="companyName"
        placeholder="Company's Name"
        required
        // value={companyName}
        value={formData.companyName}
        onChange={inputHandler}
        className="py-3 pl-6 rounded-xl bg-heading-text text-white placeholder:text-[#023047] border-0 outline-0 active:bg-white  focus:bg-white focus:text-[#023047] transition-colors duration-300 hover:bg-white"
      />
      <textarea
        name="description"
        placeholder="Tell us about the project"
        className="py-3 pl-6 rounded-xl bg-heading-text text-white placeholder:text-[#023047] border-0 outline-0 active:bg-white  focus:bg-white focus:text-[#023047] transition-colors duration-300 hover:bg-white"
        id=""
        required
        // value={description}
        value={formData.description}
        onChange={inputHandler}
        //   cols="30"
        //   rows="10"
      ></textarea>

      <Button type="submit">Get intouch</Button>
    </form>
  );
};

export default ContactForm;
