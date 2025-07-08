import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { id: 1, src: "/images/1.png" },
  { id: 2, src: "/images/1.png" },
  { id: 3, src: "/images/1.png" },
];

const AboutUs = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-3 lg:w-1/2 p-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 py-6">
              About Hotel <br /> Kaiser
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-4">
              Experience the perfect blend of comfort, elegance, and
              personalized service. Whether you're traveling for business,
              enjoying a romantic getaway, or vacationing with family, our hotel
              is dedicated to making your stay as pleasant and memorable as
              <br />
              possible.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition-colors font-medium">
              Learn More
            </button>
          </div>

          {/* Carousel */}
          <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <div className="aspect-square bg-gray-200  overflow-hidden">
                        <Image
                          src={image.src}
                          alt={`Gallery image ${image.id}`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
