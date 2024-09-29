'use client'
import React, { createContext, useReducer, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { DB } from './firebaseConfig'

const GlobalStateContext = createContext();

const initialState = {
  students: [],
  drivers: [],
  schools: [],
  emails: [],
  privateCarRequests: [],
  loading: true,
  error: null,
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsSnapshot = await getDocs(collection(DB, 'students'));
        const driversSnapshot = await getDocs(collection(DB, 'drivers'));
        const schoolsSnapshot = await getDocs(collection(DB, 'schools'));
        const emailsSnapshot = await getDocs(collection(DB, 'messages'));
        const privateCarRequestsSnapshot = await getDocs(collection(DB, 'carRequest'));

        const students = studentsSnapshot.docs.map(doc => doc.data());
        const drivers = driversSnapshot.docs.map(doc => doc.data());
        const schools = schoolsSnapshot.docs.map(doc => doc.data());
        const emails = emailsSnapshot.docs.map(doc => doc.data());
        const privateCarRequests = privateCarRequestsSnapshot.docs.map(doc => doc.data());

        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            students,
            drivers,
            schools,
            emails,
            privateCarRequests,
          },
        });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', error });
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);
