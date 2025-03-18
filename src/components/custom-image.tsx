import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  className?: string; // Allow optional className
}

export default function CustomImage({
  alt,
  className,
  ...props
}: CustomImageProps) {
  return <Image {...props} alt={alt} className={className} unoptimized />;
}
