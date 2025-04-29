import Image from 'next/image';
import cardImage1 from '../../public/assets/hero/card-image1.svg';
import { AudioControls } from './AudioControler';
import { Card, CardContent, CardHeader } from '../ui/card';
import { BrowserCircles } from './BrowserCircles';

export const NotesCard = () => {
    return (
        <div className='flex flex-col gap-1 items-center w-3/5 md:gap-2 md:w-[95%] md:ml-[3%] md:static'>
            <p className='text-xs font-medium sm:text-base md:text-lg text-secondary'>
                Your notes + transcript
            </p>
            <Card className='overflow-hidden rounded-lg py-0 shadow-lg relative h-full w-full border-0 bg-white'>
                <CardHeader className='flex flex-row items-center justify-start p-2 space-y-0 h-auto md:h-8'>
                    <BrowserCircles />
                </CardHeader>
                <CardContent className='relative bg-white px-4 md:px-8 pt-4 aspect-[4/4.9] opacity-70 md:opacity-100'>
                    <div className='relative w-full' style={{ aspectRatio: '300 / 240' }}>
                        <Image
                            src={cardImage1}
                            alt='Meeting notes'
                            className='absolute h-full w-full inset-0 object-contain'
                            width={300}
                            height={240}
                        />
                    </div>
                    <AudioControls />
                </CardContent>
            </Card>
        </div>
    )
}