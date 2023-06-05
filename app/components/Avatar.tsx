"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
  width?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, width }) => {
  return (
    <Image
      src={src || "/images/placeholder.jpg"}
      alt="avatar"
      height={30}
      width={width || 30}
      className="rounded-full"
    />
  );
};

export default Avatar;
