# RDH Travel — Travel Booking Platform

A React + Vite travel-booking front end with routing, nested routes, Redux
Toolkit, Context + `useReducer`, a custom `useFetch` hook, and full CRUD for
trip bookings.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL printed in your terminal (typically
`http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/   Header, Footer, SectionTitle, DestinationCard, BookingModal,
│                 ScrollToTop, ApiDemo
├── context/      TravelContext.jsx (currency, saved-only filter, notices)
├── data/         destinations.js, experiences.js
├── hooks/        useFetch.js
├── pages/        Home, Destinations, DestinationDetails, Experiences,
│                 ExperienceDetails, Trips, Contact, NotFound
├── redux/        store.js, tripSlice.js (CRUD for bookings)
├── styles/       global.css
├── App.jsx
└── main.jsx
```

## Notable implementation details

- **Routing**: `react-router-dom` with dynamic segments (`/destinations/:destinationId`,
  `/experiences/:category`) and a nested `Experiences` route using `<Outlet />`.
- **Redux Toolkit**: `tripSlice` holds all bookings with `addBooking`,
  `updateBooking`, and `deleteBooking` reducers, wired up via `Provider`,
  `useDispatch`, and `useSelector` (see `Trips.jsx` for the CRUD UI).
- **Context + useReducer**: `TravelContext` manages currency, the
  saved-destinations list, and a transient notice banner.
- **Custom hook**: `useFetch` wraps the Fetch API with loading/error state,
  used by `ApiDemo` against `jsonplaceholder.typicode.com/users`.
- **Forms**: `BookingModal` and `Contact` are controlled forms with manual
  validation, a `useRef` for initial focus, and conditional rendering of a
  success state.
- **URL state**: `Destinations` uses `useSearchParams` to keep `search` and
  `region` in the URL, e.g. `/destinations?search=bali&region=Asia`.
