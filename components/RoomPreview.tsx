"use client";
import React, { useState } from "react";
import Image from "next/image";

const RoomPreview = () => {
  const [selectedRoom, setSelectedRoom] = useState("single");

  const roomTypes = [
    {
      id: "single",
      name: "Single Room",
      image: "/images/r1.png",
      description:
        "A cozy single room perfect for solo travelers. Features a comfortable single bed, private bathroom, work desk, and all standard amenities for a peaceful stay.",
    },
    {
      id: "double",
      name: "Double Room",
      image: "/images/r2.jpeg",
      description:
        "A double room accommodates two guests. It comes with one double bed or two single beds (upon request), a private bathroom, and all standard comforts. Ideal for couples or friends.",
    },
    {
      id: "triple",
      name: "Triple Room",
      image: "/images/r3.jpeg",
      description:
        "Spacious triple room designed for three guests. Features comfortable bedding arrangements, private bathroom, and ample space for luggage. Perfect for families or groups.",
    },
    {
      id: "quadruple",
      name: "Quadruple Room",
      image: "/images/r4.jpeg",
      description:
        "Our largest room accommodating four guests comfortably. Multiple bed configurations available, private bathroom, and extra space for relaxation. Ideal for families or groups of friends.",
    },
  ];

  const currentRoom = roomTypes.find((room) => room.id === selectedRoom);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-2/3">
        <div className="flex flex-col justify-start items-start h-auto lg:h-screen pl-40 pt-10 py-8 lg:py-16">
          <div className="flex flex-row flex-wrap justify-start gap-4 lg:gap-6 mb-8 w-full">
            {roomTypes.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-4 py-2 transition-all duration-300 text-sm lg:text-base ${
                  selectedRoom === room.id
                    ? "text-black font-semibold border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          <div className="max-w-lg text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10 leading-tight">
              Take a look <br /> at our rooms
            </h1>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {currentRoom?.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {currentRoom?.description}
              </p>
            </div>

            <button className="px-8 py-3 rounded-3xl bg-blue-700 hover:bg-blue-500 text-white font-medium transition-colors duration-300 text-sm lg:text-base uppercase tracking-wide">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 relative h-64 lg:h-screen">
        {currentRoom && (
          <Image
            src={currentRoom.image}
            alt={currentRoom.name}
            fill
            className="object-cover transition-opacity duration-500"
            key={selectedRoom}
          />
        )}
      </div>
    </div>
  );
};

export default RoomPreview;
