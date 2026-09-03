import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/tripSlice';
import { useTravel } from '../context/TravelContext';

const emptyForm = {
  fullName: '',
  email: '',
  travelDate: '',
  travelers: 1,
};

export default function BookingModal({ destination, onClose }) {
  const dispatch = useDispatch();
  const { dispatch: travelDispatch } = useTravel();

  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.travelDate) {
      nextErrors.travelDate = 'Choose a travel date.';
    } else if (new Date(form.travelDate) < new Date(new Date().toDateString())) {
      nextErrors.travelDate = 'Travel date cannot be in the past.';
    }
    const travelers = Number(form.travelers);
    if (!travelers || travelers < 1 || travelers > 12) {
      nextErrors.travelers = 'Between 1 and 12 travelers.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;

    dispatch(
      addBooking({
        destinationId: destination.id,
        destinationName: destination.name,
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        travelDate: form.travelDate,
        travelers: Number(form.travelers),
      })
    );
    travelDispatch({ type: 'SET_NOTICE', payload: `Booking request sent for ${destination.name}` });
    setSubmitted(true);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {submitted ? (
          <div className="confirm-panel">
            <div className="check">&#10003;</div>
            <h3>Trip request received</h3>
            <p className="modal-sub">
              We&apos;ve added your {destination.name} trip to My Trips. You can review or
              edit the details any time.
            </p>
            <button type="button" className="btn btn-primary btn-block" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3>Book {destination.name}</h3>
            <p className="modal-sub">Tell us a little about your trip and we&apos;ll follow up with an itinerary.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="field-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  ref={nameInputRef}
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="Jordan Rivera"
                />
                {errors.fullName && <p className="field-error">{errors.fullName}</p>}
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
                <label htmlFor="travelDate">Travel Date</label>
                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  value={form.travelDate}
                  onChange={handleChange}
                  className={errors.travelDate ? 'error' : ''}
                />
                {errors.travelDate && <p className="field-error">{errors.travelDate}</p>}
              </div>

              <div className="field-group">
                <label htmlFor="travelers">Number of Travelers</label>
                <input
                  id="travelers"
                  name="travelers"
                  type="number"
                  min="1"
                  max="12"
                  value={form.travelers}
                  onChange={handleChange}
                  className={errors.travelers ? 'error' : ''}
                />
                {errors.travelers && <p className="field-error">{errors.travelers}</p>}
              </div>

              <button type="submit" className="btn btn-gold btn-block">
                Confirm Booking Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
