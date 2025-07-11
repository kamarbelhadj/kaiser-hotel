"use client";
import React, { useState } from "react";
import Image from "next/image";
import { roomTypes } from "@/lib/assets";
import Link from "next/link";

const RoomPreview = () => {
  const [selectedRoom, setSelectedRoom] = useState("single");

  const currentRoom = roomTypes.find((room) => room.id === selectedRoom);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Content Section */}
      <div className="w-full lg:w-2/3 order-2 lg:order-1">
        <div className="flex flex-col justify-start items-start h-full px-4 sm:px-6 md:px-8 lg:pl-20 xl:pl-40 py-6 sm:py-8 lg:py-16">
          {/* Room Type Buttons */}
          <div className="flex flex-row flex-wrap justify-start gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 w-full">
            {roomTypes.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-3 sm:px-4 py-2 transition-all duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                  selectedRoom === room.id
                    ? "text-black font-semibold border-b-2 border-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="max-w-full lg:max-w-lg text-left flex-1 flex flex-col justify-center lg:justify-start">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10 leading-tight">
              Take a look <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>at our rooms
            </h1>
            <div className="mb-6 sm:mb-8 flex-1">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                {currentRoom?.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                {currentRoom?.description}
              </p>
              <div className="w-1/2 ">
                <Link href={"/rooms"}>
                  {" "}
                  <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-700 hover:bg-blue-500 text-white font-medium transition-colors duration-300 text-sm sm:text-base uppercase  w-full sm:w-auto">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 relative h-48 sm:h-64 md:h-80 lg:h-screen order-1 lg:order-2">
        {currentRoom && (
          <Image
            src={currentRoom.image}
            alt={currentRoom.name}
            fill
            className="object-cover transition-opacity duration-500"
            key={selectedRoom}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        )}
      </div>
    </div>
  );
};

export default RoomPreview;
