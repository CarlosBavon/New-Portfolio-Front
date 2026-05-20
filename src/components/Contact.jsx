import React, { useState } from 'react';
import { sendMessage } from '../services/api';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await sendMessage(formData);
            setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's connect</h3>
                        <p>I'm always interested in hearing about new opportunities, collaborations, or just a friendly chat.</p>
                        <div className="contact-details">
                            <div><FiMail /> bavon.carlos@devbav.com</div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <FiUser className="input-icon" />
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <FiMail className="input-icon" />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <FiMessageSquare className="input-icon" />
                            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'} <FiSend />
                        </button>
                        {status.message && <div className={`status-message ${status.type}`}>{status.message}</div>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;