import AboutUs from "@/components/AboutUs";
import RoomPreview from "@/components/RoomPreview";
import Image from "next/image";
import { roomTypes } from "@/lib/assets";
import RoomsTypeCard from "@/components/RoomsTypeCard";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background and Logo */}
      <div className="relative flex flex-col justify-center items-center h-screen">
        {/* Background Image */}
        <Image
          src="/images/bg.png"
          alt="background"
          fill
          className="object-cover"
        />

        <div className="relative z-10">
          <Image src="/images/logo.png" alt="logo" width={300} height={280} />
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />

      {/* Video Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/vedio.png"
          alt="video"
          fill
          className="object-cover"
        />
      </div>

      {/* Room Preview Section */}
      <RoomPreview />

      {/*pics*/}
      <div className="relative w-full h-screen flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/3 h-1/2 md:h-full">
          <Image
            src="/images/b1.png"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/3 h-1/2 md:h-full">
          <Image
            src="/images/b2.png"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Centered Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="px-8 py-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 font-bold text-lg rounded-4xl shadow-lg transition-all duration-300 tracking-wide hover:bg-amber-100">
            Look Inside Hotel Il Kaiser
          </button>
        </div>
      </div>

      {/*room types section*/}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0">
        <RoomsTypeCard roomType={roomTypes[0]} />
        <RoomsTypeCard roomType={roomTypes[1]} />
        <RoomsTypeCard roomType={roomTypes[2]} />
      </div>

      <div className="relative w-full h-screen flex flex-col md:flex-row">
        <Image src="/images/b3.png" alt="b3" fill className="object-cover" />
      </div>
    </>
  );
}
