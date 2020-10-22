import React, { Suspense } from 'react';
import Header from './Layout/header/Header';
import Footer from './Layout/footer/Footer';
import './App.css';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Suspense fallback={''}>
        <Header />
        <Routing />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
