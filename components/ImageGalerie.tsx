// Updated ImageGalerie component
import React from "react";
import Image from "next/image";

interface ImageGalerieProps {
  imageUrl: string;
  order: string;
}

const ImageGalerie = ({ imageUrl, order }: ImageGalerieProps) => {
  return (
    <div className="flex flex-col gap-1 items-start w-full">
      {" "}
      {/* Added w-full here */}
      <Image
        src={imageUrl}
        alt={imageUrl}
        width={500}
        height={500}
        className="w-full object-cover"
      />
      <span className="text-sm font-bold">{order}</span>
    </div>
  );
};

export default ImageGalerie;
