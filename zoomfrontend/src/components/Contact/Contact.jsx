import React from 'react';
import './Contact.css';
import phone from "../../assets/phone-call-telephone-svgrepo-com.svg"
import mail from '../../assets/email-svgrepo-com.svg'
import address from '../../assets/address-location-map-svgrepo-com.svg'


const Contact = () => {
    return (
        <div className="contact-page">
            <h2>Contact Me</h2>
            <div className='contact_heading_container' >
                <h2 className='contact_heading'>I AM OPEN TO WORK AND NETWORK </h2>
                If you have an exciting project in mind, want to collaborate, or simply wish to connect, let's initiate a conversation.
            </div>
            <div className="contact-container">

                <div className="contact-item">
                    <img src={phone} width={30} alt="" />
                    <h4>Phone</h4>
                    <p>+91 7875665224</p>
                </div>
                <div className="contact-item">
                    <img src={mail} width={30} alt="" />
                    <h4>Email</h4>
                    <p>mohitkhodse0317@gmail.com</p>
                </div>
                <div className="contact-item">
                    <img src={address} width={30} alt="" />
                    <h4>Address</h4>
                    <p>Pune, Maharashtra, India</p>
                </div>
            </div>


        </div>
    );
};

export default Contact;
