import React from "react";
import { RoomType, roomTypes } from "@/lib/assets";
import Link from "next/link";

const RoomsTypeCard = ({ roomType }: { roomType: RoomType }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[550px] lg:min-h-[650px]"
      style={{ backgroundColor: roomType.color }}
    >
      <h1
        className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 mt-4"
        style={{ color: roomType.textColor }}
      >
        {roomType.name}
      </h1>

      <div className="flex-1 flex items-center justify-center">
        <p
          style={{ color: roomType.textColor }}
          className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md"
        >
          {roomType.description}
        </p>
      </div>

      <div className="mt-auto space-y-4 sm:space-y-6">
        <p
          style={{ color: roomType.textColor }}
          className="font-bold text-xl sm:text-2xl lg:text-3xl"
        >
          {roomType.price} DT
        </p>

        <Link href={"/rooms"}>
          {" "}
          <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full bg-blue-700 hover:bg-blue-500 text-white font-medium transition-colors duration-300 text-sm sm:text-base lg:text-lg uppercase w-full sm:w-auto min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] mb-4">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RoomsTypeCard;
