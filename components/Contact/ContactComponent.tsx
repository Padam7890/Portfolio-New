"use client"

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; 
import { FaPaperPlane } from "react-icons/fa";
import { sendcontact } from "@/services/generalService";

const ContactComponent = () => {

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      sendingEmail(values);

    },
  });

  const sendingEmail = async (value:any) => {
    try {
      setLoading(true);
      const res = await sendcontact (value);
      setMessage(res.data.msg);

    } catch (error:any) {
      console.log(error)
      setMessage(error.response.data.msg ||  error.message);
    }
    finally{
      setLoading(false)
    }

  }

  return (
    <>
      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14124.857378337512!2d85.34339779999999!3d27.741534050000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194f84acc8eb%3A0x6b7e62199aff3c79!2sBansbari%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1720529051099!5m2!1sen!2snp"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form className="form" onSubmit={formik.handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Full name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                required
                data-form-input
              />
             

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                required
                data-form-input
              />
             
            </div>

          

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              required
              data-form-input
            />
          

            <button className="form-btn" type="submit" data-form-btn>
              <FaPaperPlane name="paper-plane"></FaPaperPlane>
              <span>

                {
                  loading ? "Sending Message Wait ...": "Send Message "
                }
          
              </span>
            </button>
            <div style={{
              color: "white"
            }}>
              {message}
            </div>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactComponent;
