import { createContext, useContext, useReducer, useEffect, useMemo } from 'react';

const TravelContext = createContext(null);

const initialState = {
  currency: 'USD',
  savedOnly: false,
  savedDestinations: [],
  notice: '',
};

function travelReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SAVED_ONLY':
      return { ...state, savedOnly: !state.savedOnly };
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_NOTICE':
      return { ...state, notice: action.payload };
    case 'CLEAR_NOTICE':
      return { ...state, notice: '' };
    case 'TOGGLE_SAVE_DESTINATION': {
      const id = action.payload;
      const isSaved = state.savedDestinations.includes(id);
      return {
        ...state,
        savedDestinations: isSaved
          ? state.savedDestinations.filter((item) => item !== id)
          : [...state.savedDestinations, id],
      };
    }
    default:
      return state;
  }
}

const CURRENCY_RATES = { USD: 1, EUR: 0.92, INR: 83.1 };
const CURRENCY_SYMBOLS = { USD: '$', EUR: '\u20ac', INR: '\u20b9' };

export function TravelProvider({ children }) {
  const [state, dispatch] = useReducer(travelReducer, initialState);

  useEffect(() => {
    if (!state.notice) return undefined;
    const timeout = setTimeout(() => dispatch({ type: 'CLEAR_NOTICE' }), 3200);
    return () => clearTimeout(timeout);
  }, [state.notice]);

  const formatPrice = useMemo(() => {
    return (amountInUsd) => {
      const rate = CURRENCY_RATES[state.currency] ?? 1;
      const symbol = CURRENCY_SYMBOLS[state.currency] ?? '$';
      const converted = Math.round(amountInUsd * rate);
      return `${symbol}${converted.toLocaleString()}`;
    };
  }, [state.currency]);

  const value = { state, dispatch, formatPrice };

  return <TravelContext.Provider value={value}>{children}</TravelContext.Provider>;
}

export function useTravel() {
  const ctx = useContext(TravelContext);
  if (!ctx) {
    throw new Error('useTravel must be used within a TravelProvider');
  }
  return ctx;
}
