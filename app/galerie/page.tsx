import ImageGalerie from "@/components/ImageGalerie";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row flex-1/2 gap-4 sm:gap-6 md:gap-8 w-full m-2 sm:m-3 md:m-4">
        <ImageGalerie imageUrl="/images/galerie1.png" order="01" />
        <ImageGalerie imageUrl="/images/galerie2.png" order="02" />
      </div>
      <div className="flex flex-1/2 w-full">
        <ImageGalerie imageUrl="/images/galerie3.png" order="03" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full m-2 sm:m-3 md:m-4">
        <ImageGalerie imageUrl="/images/galerie4.png" order="04" />
        <div className="flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20">
          <p className="text-base sm:text-lg md:text-xl">
            {" "}
            A double room accommodates two guests. It comes with one double bed
            or two single beds (upon request), a private bathroom, and all
            standard comforts. Ideal for couples or friends.
          </p>
        </div>
      </div>
      <div className="flex flex-1/2 w-full mb-2 sm:mb-3 md:mb-4">
        <ImageGalerie imageUrl="/images/galerie5.png" order="05" />
      </div>
      <Image src="/icons/ArrowUp.png" alt="image" width={20} height={20} />
      <p className="text-lg sm:text-xl uppercase font-bold m-2 sm:m-3 md:m-4">
        HOTEL KAISER BOOK IMAGES
      </p>
    </div>
  );
};

export default page;
