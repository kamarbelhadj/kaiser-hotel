"use client";
import React, { useState } from "react";
import Image from "next/image";
import { roomTypes, Rooms } from "@/lib/assets";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RoomCard from "@/components/RoomCard";

const Page = () => {
  const [selectedRoomType, setSelectedRoomType] = useState("");

  // Filter rooms based on selected room type
  const filteredRooms = selectedRoomType
    ? Rooms.filter((room) => room.type === selectedRoomType)
    : Rooms;

  return (
    <div>
      <div className="relative w-full h-screen mb-6">
        <Image
          src="/images/galerie1.png"
          alt="room"
          fill
          className="object-cover z-0"
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          Our Rooms And Suites
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <RadioGroup
          value={selectedRoomType}
          onValueChange={setSelectedRoomType}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 m-4 p-2"
        >
          {roomTypes.map((room) => (
            <div key={room.id} className="flex items-center space-x-2">
              <RadioGroupItem
                value={room.id}
                id={room.id}
                className="border border-gray-300"
              />
              <Label
                htmlFor={room.id}
                className="text-lg sm:text-xl lg:text-2xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {room.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Room Cards Section */}
      <div className="container mx-auto px-4 py-8">
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <RoomCard
                id={room.id}
                key={room.id}
                image={room.Images[0]}
                name={room.name}
                bathroom={room.bathroom}
                price={room.price}
                type={room.type}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">
              No rooms found for the selected type.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
