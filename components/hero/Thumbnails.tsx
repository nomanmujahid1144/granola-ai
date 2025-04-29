import Image from 'next/image';
import image1 from '../../public/assets/hero/videoThumb1.webp';
import image2 from '../../public/assets/hero/videoThumb3.webp';

export const Thumbnails = () => (
  <div className='hidden md:flex absolute left-0 top-1/2 flex-col gap-1.5 items-stretch p-1.5 w-48 rounded-lg -translate-y-1/5 -translate-x-2/3 bg-black/20'>
    {[image1, image2].map((image, index) => (
      <div key={index} className='overflow-hidden w-full rounded transition-all duration-300 aspect-video hover:scale-105'>
        <Image
          alt={`Video thumbnail ${index + 1}`}
          src={image}
          className='w-full h-full object-cover transition-all'
        />
      </div>
    ))}
  </div>
);