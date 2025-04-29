import Image from 'next/image';
import cardImage2 from '../../public/assets/hero/card-image2.svg';
import aiIcon from '../../public/assets/hero/ai.svg';
import { Card, CardContent, CardHeader } from '../ui/card';
import { BrowserCircles } from './BrowserCircles';

export const EnhancedCard = () => {
    return (
        <div className='flex absolute right-4 top-6 flex-col gap-1 items-center w-3/5 sm:right-6 md:gap-2 md:top-auto md:static md:w-full'>
            <p className='mr-2 text-xs font-medium sm:text-base md:text-lg md:translate-x-0'>
                <Image
                    src={aiIcon}
                    alt='AI icon'
                    width={20}
                    height={20}
                    className='inline mr-2 w-4 h-4 md:w-5 md:h-5 text-button-start'
                />
                <span>AI enhanced</span>
            </p>
            <Card className='overflow-hidden py-0 rounded-lg shadow-lg relative h-full w-full border-0 bg-white'>
                <CardHeader className='flex flex-row items-center justify-start p-2 space-y-0 h-auto md:h-8'>
                    <BrowserCircles />
                </CardHeader>
                <CardContent className='relative bg-white p-4 md:p-8 pt-4 aspect-[4/5] overflow-hidden'>
                    <div className='relative w-full' style={{ aspectRatio: '300 / 240' }}>
                        <Image
                            src={cardImage2}
                            alt='AI enhanced notes'
                            className='absolute inset-0 w-full object-contain'
                            width={300}
                            height={240}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}