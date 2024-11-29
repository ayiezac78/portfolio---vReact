import { blurhashToCssGradientString } from "@unpic/placeholder";
import { Image } from "@unpic/react";
interface ImageBlurHashProps {
  readonly src: string;
  readonly alt: string;
  readonly blurhash: string;
  readonly width: number;
  readonly height: number;
  readonly className: string;
}

const ImageBlurHash = ({ src, alt, blurhash, width, height, className }: ImageBlurHashProps): JSX.Element => {
  const placeholder = blurhashToCssGradientString(blurhash);
  return (
    <Image
      src={src}
      alt={alt}
      background={placeholder}
      loading="eager"
      layout="constrained"
      priority={true}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ImageBlurHash