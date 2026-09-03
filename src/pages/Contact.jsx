import { useState, useRef } from 'react';

const emptyForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const nameRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) {
      nameRef.current?.focus();
      return;
    }
    setSent(true);
    setForm(emptyForm);
  }

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">Contact</p>
          <h1>Talk to a trip designer, not a call centre.</h1>
          <p>Questions about a destination, a date change, or a group trip — send it over.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="contact-info__item">
              <p className="field-label">Email</p>
              <p style={{ fontWeight: 500 }}>hello@rdhtravel.com</p>
            </div>
            <div className="contact-info__item">
              <p className="field-label">Phone</p>
              <p style={{ fontWeight: 500 }}>+91 (987) 555-0148</p>
            </div>
            <div className="contact-info__item">
              <p className="field-label">Studio</p>
              <p style={{ fontWeight: 500 }}>4/15 Anna Nagar, Chennai, TamilNadu ,India</p>
            </div>
          </div>

          <div className="contact-form">
            {sent ? (
              <div className="confirm-panel">
                <div className="check">&#10003;</div>
                <h3>Message sent</h3>
                <p className="modal-sub">
                  Thanks for reaching out — a trip designer will reply within one business day.
                </p>
                <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field-group">
                  <label htmlFor="name">Name</label>
                  <input
                    ref={nameRef}
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="field-error">{errors.name}</p>}
                </div>

                <div className="field-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="field-error">{errors.email}</p>}
                </div>

                <div className="field-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="How can we help?"
                  />
                  {errors.message && <p className="field-error">{errors.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
