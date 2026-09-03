import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateBooking, deleteBooking } from '../redux/tripSlice';
import { useTravel } from '../context/TravelContext';

export default function Trips() {
  const bookings = useSelector((state) => state.trips.bookings);
  const dispatch = useDispatch();
  const { dispatch: travelDispatch } = useTravel();

  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);

  function startEdit(booking) {
    setEditingId(booking.id);
    setDraft({ ...booking });
  }

  function cancelEdit() {
    setEditingId(null);
    setDraft(null);
  }

  function saveEdit(id) {
    if (!draft.fullName.trim() || !draft.email.trim() || !draft.travelDate) return;
    dispatch(
      updateBooking({
        id,
        changes: {
          fullName: draft.fullName.trim(),
          email: draft.email.trim(),
          travelDate: draft.travelDate,
          travelers: Number(draft.travelers) || 1,
        },
      })
    );
    travelDispatch({ type: 'SET_NOTICE', payload: 'Trip updated' });
    cancelEdit();
  }

  function handleDelete(id, name) {
    dispatch(deleteBooking(id));
    travelDispatch({ type: 'SET_NOTICE', payload: `Removed ${name} trip` });
  }

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">My Trips</p>
          <h1>Everything you&apos;ve requested so far.</h1>
          <p>Edit traveller details or cancel a request any time before it&apos;s confirmed.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {bookings.length === 0 ? (
            <div className="empty-state">
              <h3>No trips booked yet</h3>
              <p>Browse destinations and request a booking to see it here.</p>
              <Link to="/destinations" className="btn btn-primary" style={{ marginTop: '1.25rem' }}>
                Browse destinations
              </Link>
            </div>
          ) : (
            <div className="trip-list">
              {bookings.map((booking) => {
                const isEditing = editingId === booking.id;
                return (
                  <div className="trip-card" key={booking.id}>
                    {isEditing ? (
                      <>
                        <div className="trip-edit-row">
                          <p className="field-label">Destination</p>
                          <p className="field-value">{booking.destinationName}</p>
                        </div>
                        <div className="trip-edit-row">
                          <p className="field-label">Traveler Name</p>
                          <input
                            value={draft.fullName}
                            onChange={(event) => setDraft({ ...draft, fullName: event.target.value })}
                          />
                        </div>
                        <div className="trip-edit-row">
                          <p className="field-label">Email</p>
                          <input
                            value={draft.email}
                            onChange={(event) => setDraft({ ...draft, email: event.target.value })}
                          />
                        </div>
                        <div className="trip-edit-row">
                          <p className="field-label">Date</p>
                          <input
                            type="date"
                            value={draft.travelDate}
                            onChange={(event) => setDraft({ ...draft, travelDate: event.target.value })}
                          />
                        </div>
                        <div className="trip-actions">
                          <button type="button" className="icon-btn" onClick={() => saveEdit(booking.id)}>
                            Save
                          </button>
                          <button type="button" className="icon-btn" onClick={cancelEdit}>
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="field-label">Destination</p>
                          <p className="field-value">{booking.destinationName}</p>
                        </div>
                        <div>
                          <p className="field-label">Traveler</p>
                          <p className="field-value">{booking.fullName}</p>
                          <p style={{ fontSize: '0.82rem', color: 'var(--color-clay)' }}>{booking.email}</p>
                        </div>
                        <div>
                          <p className="field-label">Date</p>
                          <p className="field-value">{booking.travelDate}</p>
                        </div>
                        <div>
                          <p className="field-label">Travelers</p>
                          <p className="field-value">{booking.travelers}</p>
                        </div>
                        <div className="trip-actions">
                          <button type="button" className="icon-btn" onClick={() => startEdit(booking)}>
                            Edit
                          </button>
                          <button
                            type="button"
                            className="icon-btn danger"
                            onClick={() => handleDelete(booking.id, booking.destinationName)}
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
