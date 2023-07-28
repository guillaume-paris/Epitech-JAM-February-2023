import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <img src="./avengers.jpg" alt="avengers" className="w-3/5 rounded-full border-8 border-double border-gray-400" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="justify-start">
            <h1 className="text-5xl font-bold text-white">Epitech JAM</h1>
            <p className="text-2xl font-light mt-7 w-4/5 text-white">
                Ce projet est un quiz pour savoir qui vous seriez super-héro dans une autre vie.
            </p>
            <div className="mt-10 flex gap-6">
                <Link to="/game" className="bg-gradient-to-r from-red-200 to-indigo-500 text-3xl text-white px-5 py-4 pb-5 rounded-full hover:bg-indigo-400">
                    Game
                </Link>
                <Link to="/about" className="bg-gradient-to-r from-red-200 to-indigo-500 text-3xl text-white px-5 py-4 pb-5 rounded-full hover:bg-indigo-400 ml-4">
                    About
                </Link>
                <Link to="/contact" className="bg-gradient-to-r from-red-200 to-indigo-500 text-3xl text-white px-5 py-4 pb-5 rounded-full hover:bg-indigo-400 ml-4">
                    Contact
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;