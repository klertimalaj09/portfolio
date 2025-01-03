"use client";
import { useState } from "react";

export default function Kontakti() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      

      <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">Dërgo një Mesazh</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300">Emri</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Shkruani emrin tuaj"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Shkruani emailin tuaj"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300">Mesazhi</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Shkruani mesazhin tuaj"
            ></textarea>
          </div>

          <h1 className="text-3xl font-bold mb-6">Kontakto</h1>
      <p className="text-lg text-gray-200 mb-8">
        Mund të më kontaktoni me të dhënat më poshtë:
      </p>

      <ul className="list-disc pl-6 text-gray-300 mb-8">
        <li>Email: klerti.hg.al@gmail.com</li>
        <li>LinkedIn: @klertimalaj</li>
        <li>Phone: +355 68 392 5450</li>
      </ul>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transform transition-transform hover:scale-105"
            >
              Dërgo Mesazhin
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Mesazhi u dergua me sukses!</h2>
            <button
              onClick={handleCloseModal}
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transform transition-transform hover:scale-105"
            >
              Mbyll
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
