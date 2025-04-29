import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import rightArrow from '../public/assets/hero/right-arrow.svg';
import windows from '../public/assets/hero/windows.svg';
import { Thumbnails } from './hero/Thumbnails';
import { NotesCard } from './hero/NotesCard';
import { EnhancedCard } from './hero/EnhancedCard';



const GranolaHomepage = () => {
    return (
        <section className="relative flex flex-col justify-center items-center gap-4 pb-24 w-full">
            {/* Background Gradient */}
            <div className='absolute hero-gradient inset-0 overflow-visible z[-1]' />
                        
            <div className='flex flex-col gap-4 justify-center items-center px-6 pt-28 pb-12 lg:pb-16 lg:gap-8 md:pt-40 lg:pt-40'>
                
                <Button variant="outline" className="px-3 py-1.5 font-medium rounded-full border bg-transparent text-primary hover:bg-neutral-100 z-10 transition-colors flex gap-1 items-center">
                    📲 Get iOS early access
                    <Image
                        src={rightArrow}
                        alt='Right arrow'
                        width={16}
                        height={16}
                        className='w-4 h-4 text-secondary'
                    />
                </Button>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.020em] text-center leading-[0.9] text-primary">
                    <span className="text-light-gray">The</span> AI notepad
                    <span className="text-light-gray"> for people in</span>
                    <br className="hidden md:block" />back-to-back meetings
                </h1>

                <h2 className="px-14 w-full max-w-2xl text-lg font-medium leading-tight text-center lg:text-2xl text-secondary">
                    Granola takes your raw meeting notes and makes them awesome
                </h2>

                <div className='flex flex-col'>
                    <Link
                        href={'#'}
                        className="flex-none bg-gradient-to-br from-button-start to-button-end justify-center flex gap-2 items-center text-primary-primary rounded-full font-medium text-base lg:text-xl px-6 h-12 lg:h-14 shadow-[inset_0px_0.5px_1px_rgb(255_255_255_/_0.5)] relative overflow-hidden group hover:scale-[101%] transition-all duration-200"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-50 transition-all"></div>
                        <Image
                            src={windows}
                            alt="Windows icon"
                            width={20}
                            height={20}
                            className="mr-2 flex-none w-5 h-5"
                        />
                        <span>Join the Windows waitlist</span>
                    </Link>
                    <p className="mt-4 max-w-xs text-sm font-normal text-center opacity-60 text-primary-primary">
                        Granola is Mac-only for now. We can let you know when it's ready for Windows
                    </p>
                </div>
            </div>

            <div className='relative gap-2 items-center px-4 -mb-16 w-full max-w-4xl sm:px-6 md:-mb-32 md:flex xl:px-0'>
                <Thumbnails />
                <NotesCard />

                <Image
                    src={rightArrow}
                    alt='Right arrow'
                    width={24}
                    height={24}
                    className='hidden flex-none w-6 h-6 md:block text-secondary'
                />

                <EnhancedCard />
            </div>
        </section>
    );
};

export default GranolaHomepage;