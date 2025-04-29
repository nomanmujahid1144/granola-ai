import Image from "next/image";
import pause from '../../public/assets/hero/pause.svg';


export const AudioControls = () => (
    <div className='flex border absolute bottom-4 left-1/2 z-10 gap-3 items-center p-2.5 bg-white rounded-full shadow-lg transition-all transform -translate-x-1/2 origin-bottom scale-75 md:scale-100'>
      <div className='flex justify-center items-center w-6 h-6 gap-1'>
        <div className='bg-green-500 rounded-full transition-all duration-300 ease-in-out w-1 h-2/4' />
        <div className='bg-green-500 rounded-full transition-all duration-300 ease-in-out w-1 h-3/4' />
        <div className='bg-green-500 rounded-full transition-all duration-300 ease-in-out w-1 h-2/4' />
      </div>
      <div className='opacity-60'>
        <Image
          src={pause}
          alt='Pause button'
          className='w-5 h-5 text-secondary'
          width={20}
          height={20}
        />
      </div>
    </div>
  );