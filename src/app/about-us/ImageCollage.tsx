import Image from 'next/image';

interface ImageCollageProps {
    images: {
      src: string;
      alt: string;
    }[];
  }
  
  const ImageCollage = ({ images }: ImageCollageProps) => {
    // Ensure we have at least 3 images
    if (images.length < 3) {
      console.warn('CircularImageCollage requires at least 3 images');
      return null;
    }
  
    return (
      <div className="relative w-full max-w-xl aspect-square mx-auto">
        {/* Large image (top-left) */}
        <div className="absolute top-0 left-0 w-[65%] h-[65%] overflow-hidden rounded-full">
          <div className="relative w-full h-full">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
  
        {/* Medium image (top-right) */}
        <div className="absolute top-[10%] right-0 w-[45%] h-[45%] border-[20px] border-white overflow-hidden rounded-full">
          <div className="relative w-full h-full">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
  
        {/* Small image (bottom-right) */}
        <div className="absolute bottom-[18%] right-1/4 w-[30%] h-[30%] border-[20px] border-white overflow-hidden rounded-full">
          <div className="relative w-full h-full">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageCollage;