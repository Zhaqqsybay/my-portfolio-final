import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('https://formspree.io/f/xayrkork', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Error sending message.');
            }
        } catch (error) {
            setStatus('Error sending message.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message Here..."
                required
            />
            <button type="submit">Send Message</button>
            {status && <p>{status}</p>}
        </form>
    );
}

export default ContactForm;
