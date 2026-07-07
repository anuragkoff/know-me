"use client"
import { useState } from "react";
import "./contact.css"

export default function Contact() {
    const [formData, setFormData] = useState<{ email: string, message: string }>({ email: "", message: "" });
    const [isDataFilled, setIsDataFilled] = useState(false);

    function onDataChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setIsDataFilled(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        alert(data.message);
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
                        <input type="text" id="name" name="name" required onChange={onDataChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={onDataChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea name="message" id="textarea" required onChange={onDataChange} />
                    </div>

                    <div className="form-consent flex">
                        <input type="checkbox" id="consent" name="consent" required />
                        <label className="text-gray-500 font-bold text-sm pl-2" htmlFor="consent">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                    </div>
                    <button className="form-submit-btn" type="button" disabled={!isDataFilled} style={{ cursor: !isDataFilled ? "not-allowed" : "pointer" }} onClick={handleSubmit}>Send</button>
                    <p className="text-gray-500 font-bold text-sm">I generally revert within 48 hours.</p>
                </form>
            </div>
            </div>
        </div>
    )
}
