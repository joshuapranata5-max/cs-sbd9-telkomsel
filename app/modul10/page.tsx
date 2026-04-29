"use client";

import React, { useState, useEffect } from "react";

const response = {
  page: 1,
  results: [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      image: "https://picsum.photos/500?random=1",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      image: "https://picsum.photos/500?random=2",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      image: "https://picsum.photos/500?random=3",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      image: "https://picsum.photos/500?random=4",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      image: "https://picsum.photos/500?random=5",
    },
  ],
};

export default function Modul10() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      setTimeout(() => {
        alert(`Angka ${count} habis dibagi oleh 10`);
      }, 10);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-sans">
      {/*navbar*/}
      <nav className="bg-blue-600 text-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Valiant Joshua</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Profile</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition-colors font-medium">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto mt-8 px-4 space-y-12">
        {/*counter */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Counter</h2>
          <div className="text-6xl font-extrabold text-blue-600 mb-8">{count}</div>

          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow transition transform hover:-translate-y-1"
            >
              -
            </button>
            <button
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg shadow transition transform hover:-translate-y-1"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow transition transform hover:-translate-y-1"
            >
              +
            </button>
          </div>
        </section>

        {/* Card Component*/}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Daftar Artikel (Grid & Map)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {response.results.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition duration-300"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line flex-grow">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
}
