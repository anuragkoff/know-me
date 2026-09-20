"use client"
import { useState } from "react";
import "./contact.css"

export default function Contact() {
    const [formData, setFormData] = useState<{ name: string, email: string, message: string }>({ name: "", email: "", message: "" });
    const [isDataFilled, setIsDataFilled] = useState(false);
    const [isConsent, setIsConsent] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);

    function onConsentChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIsConsent(e.target.checked);
    }

    function onDataChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        const nextFormData = { ...formData, [name]: value };

        if(name === "email") {
            validateEmail(value);
        }

        if(name === "name") {
            validateName(value);
        }

        setFormData(nextFormData);

        if(!(nextFormData.email && nextFormData.message && nextFormData.name)) {
            setIsDataFilled(false);
            return;
        }

        setIsDataFilled(true);
    }

    const handleSubmit = async () => {
        if(!(formData.email && formData.message && formData.name)) {
            alert("Please fill in all fields before submitting.");
            return;
        }
        if(!isConsent) {
            alert("Please consent to having your information stored.");
            return;
        }
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        alert(data.message);
        clearData();
    };
    
    const clearData = () => {
        setFormData({ name: "", email: "", message: "" });
        setIsDataFilled(false);
        setIsConsent(false);
        setIsEmailValid(true);
        setIsNameValid(true);
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[A-Za-z0-9._-]+@[a-z]{2,}\.[a-z]{2,}$/;

        setIsEmailValid(emailRegex.test(email));
    };

    const validateName = (name: string) => {
        const nameRegex = /^[A-Za-z\s]+$/;

        setIsNameValid(nameRegex.test(name));
    };

    return (
        <div className='contact' id="contact">
            <div className="contactText">
                <h1 className="text-4xl font-bold text-red-900">Contact</h1>
            </div>
            <div className="contactForm">
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={onDataChange} />
                        {!isNameValid && formData.name && (
                            <p className="text-red-400 text-sm ml-1.5">Please enter a valid name.</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={onDataChange} />
                        {!isEmailValid && formData.email && (
                            <p className="text-red-400 text-sm ml-1.5">Please enter a valid email address.</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea name="message" id="textarea" required value={formData.message} onChange={onDataChange} />
                    </div>

                    <div className="form-consent flex">
                        <input type="checkbox" id="consent" name="consent" required checked={isConsent} onChange={onConsentChange} />
                        <label className="text-gray-500 font-bold text-sm pl-2" htmlFor="consent">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                    </div>

                    <button
                        className="form-submit-btn"
                        type="button"
                        disabled={!isDataFilled || !isConsent}
                        style={{ cursor: !isDataFilled || !isConsent ? "not-allowed" : "pointer" }}
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                    <p className="text-gray-500 font-bold text-sm">I generally revert within 48 hours.</p>
                </form>
            </div>
            </div>
        </div>
    )
}
