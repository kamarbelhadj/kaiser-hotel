// app/room/[id]/page.tsx
import { Rooms } from "@/lib/assets";
import { redirect } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import RoomCard from "@/components/RoomCard";
const RoomPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const room = Rooms.find((room) => room.id === id);

  if (!room) {
    redirect("/rooms");
  }

  const { name, type, description, roomAmenties, Images, price, bathroom } =
    room;

  // Get relatable rooms (same type or similar price range, excluding current room)
  const relatableRooms = Rooms.filter((r) => {
    if (r.id === id) return false; // Exclude current room

    // Find rooms with same type or similar price (within 20% range)
    const priceRange = price * 0.2;
    const similarPrice = Math.abs(r.price - price) <= priceRange;
    const sameType = r.type === type;

    return sameType || similarPrice;
  }).slice(0, 6); // Limit to 6 rooms

  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-14 items-start">
            {/* Image Carousel */}
            <div className="w-full lg:w-1/2">
              <div className="p-4 sm:p-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {Images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <div className="aspect-square bg-gray-200 overflow-hidden">
                            <Image
                              src={image}
                              alt={`${name} - Image ${index + 1}`}
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>

            {/* Room Details */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 p-4 sm:p-6 mt-0 lg:mt-10">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {name}
                </h1>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg flex-1">
                    <div className="flex-shrink-0 p-1 bg-white rounded-full shadow-sm">
                      <Image
                        src="/icons/bed.png"
                        alt="bed"
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">
                      {type}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg flex-1">
                    <div className="flex-shrink-0 p-1 bg-white rounded-full shadow-sm">
                      <Image
                        src="/icons/baignoire.png"
                        alt="bath"
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">
                      {bathroom}
                    </p>
                  </div>
                </div>
              </div>

              {description && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Description
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {description}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">Bathrooms:</span>
                  <span className="text-gray-600">{bathroom}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">Price:</span>
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">
                    {price} DT
                  </span>
                  <span className="text-sm text-gray-500">per night</span>
                </div>
              </div>

              {/* Room Amenities */}
              {roomAmenties && roomAmenties.length > 0 && (
                <div className="space-y-3 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-1.5">
                    {roomAmenties.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-1.5 px-2 py-1.5 bg-gray-50 hover:bg-gray-100 rounded-3xl transition-colors text-xs"
                      >
                        <Image
                          src={`/icons/${amenity}.png`}
                          alt={amenity}
                          width={16}
                          height={16}
                          className="w-4 h-4 flex-shrink-0"
                        />
                        <span className="truncate font-medium text-gray-700">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Book Now Button */}
              <div className="flex justify-center pt-2">
                <button className="w-full sm:w-3/4 lg:w-1/2 bg-blue-800 text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-blue-600 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relatable Rooms Section */}
      {relatableRooms.length > 0 && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="bg-white shadow-lg  p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
              Similar Rooms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatableRooms.map((room) => (
                <RoomCard image={room.Images[0]} key={room.id} {...room} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
