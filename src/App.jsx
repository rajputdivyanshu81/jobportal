import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header />
      <main className="p-4">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Welcome to the best place for companies to find top engineers!</h2>              
          </div>
          <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;