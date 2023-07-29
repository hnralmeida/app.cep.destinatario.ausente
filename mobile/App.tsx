import React from 'react';
import { Routes } from './src/routes';
import { AuthProvider } from './src/context/Auth/AuthProvider';
// import Constants from 'expo-constants';


export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>

  );
}

