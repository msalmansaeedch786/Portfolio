import React from "react";
import "./Contact.scss";

import phone from "../../Assets/phone.png";
import maill from "../../Assets/mail.png";
import location from "../../Assets/location.png";
import { useState } from "react";
import { mail } from "../../Api/mail";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CircularProgress from "@mui/material/CircularProgress";

const Contact = (props) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const Validate = () => {
    const nameRegex = /^[A-Z ]{4,}$/i;
    const emailregex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var messageregex = /^[a-zA-Z0-9 !@#$%^&*]{20,100}$/;

    const formError = {};
    if (!val.fullName) {
      formError.fullName = "Please Enter your Name";
    } else if (!nameRegex.test(val.fullName)) {
      formError.fullName = "Please Enter valid name";
    }
    if (!val.email) {
      formError.email = "Please Enter your Email";
    } else if (!emailregex.test(val.email)) {
      formError.email = "Please Enter valid email";
    }
    if (!val.message) {
      formError.message = "Please Enter your message";
    } else if (!messageregex.test(val.message)) {
      formError.message = "Please Enter minimum 20 characters";
    }

    setError(formError);
  };

  const done = async (event) => {
    setLoading(true);
    Validate();
    event.preventDefault();
    const res = await mail(val);
    if (res.error != null) {
      console.log("something went wrong");
      toast.error(res.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    } else {
      setLoading(false);
      toast.success("Thank You! We 'll contact you soon", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("data send successfully", res.data);
    }
  };

  return (
    <div ref={props.contacts} className="contact__container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="heading">
        Contact
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="para">
        Share your idea with me and let's get started right now!
      </div>
      <div className="bottom">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="left">
          <div className="phone">
            <div className="img">
              <img src={phone} alt="" className="icon" />
            </div>
            <div className="right__text">
              <div className="text">Phone</div>
              <div className="number">+491637171564 </div>
            </div>
          </div>
          <div className="phone">
            <div className="img">
              <img src={maill} alt="" className="icon" />
            </div>
            <div className="right__text">
              <div className="text">Email</div>
              <div className="number">msalmansaeedch786@gmail.com</div>
            </div>
          </div>
          <div className="phone">
            <div className="img">
              <img src={location} alt="" className="icon" />
            </div>
            <div className="right__text">
              <div className="text">Location</div>
              <div className="number"> Berlin, Germany</div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="right">
          <div className="heading">
            <span>
              I'm always open to discussing product <br /> projects or
              partnerships.
            </span>
          </div>
          <form onSubmit={done} className="form">
            <div className="name">
              <input
                name="fullName"
                value={val.fullName}
                onChange={handleChange}
                type="text"
                className="name__input"
                placeholder="Name *"
              />
              <p className="error">{error?.fullName}</p>
            </div>
            <div className="name">
              <input
                name="email"
                value={val.email}
                onChange={handleChange}
                type="email"
                className="name__input"
                placeholder="Email *"
              />
              <p className="error">{error?.email}</p>
            </div>
            <div className="name">
              <input
                name="message"
                value={val.message}
                onChange={handleChange}
                type="text"
                className="name__input"
                placeholder="Message *"
              />
              <p className="error">{error?.message}</p>
            </div>
            <button className="btn">
              {loading === true ? (
                <CircularProgress className="loading" />
              ) : (
                "SUBMIT"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
