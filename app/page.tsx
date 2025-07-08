import AboutUs from "@/components/AboutUs";
import RoomPreview from "@/components/RoomPreview";
import Image from "next/image";

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

        {/* Logo on top of background */}
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
      {/*room preview section*/}
      <RoomPreview />
    </>
  );
}
