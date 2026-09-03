import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addBooking: {
      reducer(state, action) {
        state.bookings.push(action.payload);
      },
      prepare({ destinationId, destinationName, fullName, email, travelDate, travelers }) {
        return {
          payload: {
            id: nanoid(),
            destinationId,
            destinationName,
            fullName,
            email,
            travelDate,
            travelers,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
    updateBooking(state, action) {
      const { id, changes } = action.payload;
      const booking = state.bookings.find((item) => item.id === id);
      if (booking) {
        Object.assign(booking, changes);
      }
    },
    deleteBooking(state, action) {
      state.bookings = state.bookings.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addBooking, updateBooking, deleteBooking } = tripSlice.actions;
export default tripSlice.reducer;
