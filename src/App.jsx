import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-center p-8 bg-white rounded-lg shadow-xl w-3/4 md:w-1/2">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-400 mb-4">
            Bienvenue sur Megashop 🛍️
          </h1>
          <p className="text-xl mb-4">
            Créez votre boutique en ligne, facile, rapide et super stylée !
          </p>
          <button className="bg-gradient-to-r from-pink-400 to-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300">
            Explorez notre boutique
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;