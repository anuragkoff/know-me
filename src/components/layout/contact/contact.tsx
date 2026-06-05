"use client"
import { useState } from "react";
import "./contact.css"

export default function Contact() {
    const [formData, setFormData] = useState<{ email: string, message: string }>({ email: "", message: "" });

    function onDataChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
            <div className="">
                <h1 className="text-4xl font-bold text-red-900">Contact Me</h1>
                <p className="text-lg text-gray-600">Feel free to reach out to me using the form below!</p>
            </div>
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
                    <button className="form-submit-btn" type="button" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
