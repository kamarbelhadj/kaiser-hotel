import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RoomCardProps {
  id: string;
  image: string;
  name: string;
  bathroom: number;
  price: number;
  type: string;
}

const RoomCard = ({
  id,
  image,
  name,
  bathroom,
  price,
  type,
}: RoomCardProps) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* Room Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Room Details */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2 leading-tight">
          {name}
        </h3>

        {/* Room Type */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3">
          <div className="flex-shrink-0">
            <Image
              src="/icons/bed.png"
              alt="bed"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base truncate">{type}</p>
        </div>

        {/* Bathrooms */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4">
          <div className="flex-shrink-0">
            <Image
              src="/icons/baignoire.png"
              alt="shower"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            {bathroom} Bathroom{bathroom !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
            <p className="text-xl sm:text-2xl font-bold text-blue-600">
              {price} DT
            </p>
            <span className="text-xs sm:text-sm text-gray-500 -mt-1 sm:mt-0">
              per night
            </span>
          </div>
          <Link href={`/rooms/${id}`}>
            <button className="bg-blue-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 active:bg-blue-900 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 cursor-pointer">
              See details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
