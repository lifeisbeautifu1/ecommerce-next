"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  image?: string;
  title?: string;
  fill?: boolean;
};

const ProductImage: React.FC<Props> = ({ fill, image, title }) => {
  const [loading, setLoading] = useState(true);
  return fill ? (
    <Image
      src={image}
      fill
      alt={title}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
        loading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadCapture={() => setLoading(false)}
    />
  ) : (
    <Image
      src={image}
      alt={title}
      width={400}
      height={1000}
      className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
        loading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadCapture={() => setLoading(false)}
    />
  );
};

export default ProductImage;
