import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Mini Projecteur Portable',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
  },
  {
    id: 2,
    name: 'Tapis de Yoga Antidérapant',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07b',
  },
  {
    id: 3,
    name: 'Lampe LED de Chevet Tactile',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1582719478185-2197a1a4f7a9',
  },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">MegaShop Express</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.price.toFixed(2)} €</p>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🛒 Panier ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Votre panier est vide.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border-b pb-2">
                {item.name} - {item.price.toFixed(2)} €
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}