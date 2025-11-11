'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formStartTime, setFormStartTime] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Set start time when user first interacts with form
    if (formStartTime === 0) {
      setFormStartTime(Date.now());
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Time-based protection: form must be filled for at least 5 seconds
    const submissionTime = Date.now();
    const timeTaken = submissionTime - formStartTime;
    
    if (timeTaken < 5000) { // Less than 5 seconds
      console.log('Form submitted too quickly - possible bot');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        console.error('Form submission error:', data.error);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center">
          Have an idea, project, or collaboration in mind? Let’s talk!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-royal focus:ring-royal focus:ring-2 outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-royal focus:ring-royal focus:ring-2 outline-none"
              placeholder="name@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-royal focus:ring-royal focus:ring-2 outline-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* Honeypot field - hidden from users, bots will fill it */}
          <input
            type="text"
            name="website"
            value={formData.website || ''}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-royal hover:bg-royal-dark font-semibold transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-400 text-center">
             Message sent successfully! I’ll get back to you soon.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-400 text-center">
              ❌ Failed to send message. Please ensure all fields are filled correctly and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
