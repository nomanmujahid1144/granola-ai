import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { BrowserCircles } from "./BrowserCircles";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

// Define the props interface with TypeScript
interface BrowserCardProps {
    cardText?: string | ReactNode;
    children: ReactNode;
    iconBelongsToText: boolean;
    aiIcon: StaticImageData | string;
    altTextIcon?: string
}


export const BrowserCard: React.FC<BrowserCardProps> = ({
    cardText,
    children,
    iconBelongsToText,
    aiIcon,
    altTextIcon = "Alt Text"

}) => {
    return (
        <div className='flex flex-col gap-1 items-center w-3/5 md:gap-2 md:w-[95%] md:ml-[3%] md:static'>
            {cardText && (
                <p className='text-xs font-medium sm:text-base md:text-lg text-secondary'>
                    {iconBelongsToText && (
                        <Image
                            src={aiIcon}
                            alt={altTextIcon}
                            width={20}
                            height={20}
                            className='inline mr-2 w-4 h-4 md:w-5 md:h-5 text-button-start'
                        />
                    )}
                    {cardText}
                </p>
            )}
            <Card className='overflow-hidden rounded-lg py-0 shadow-lg relative h-full w-full border-0 bg-white'>
                <CardHeader className='flex flex-row items-center justify-start p-2 space-y-0 h-auto md:h-8'>
                    <BrowserCircles />
                </CardHeader>
                <CardContent className='relative bg-white px-4 md:px-8 pt-4 aspect-[4/4.9] opacity-70 md:opacity-100'>
                    {children}
                </CardContent>
            </Card>
        </div>
    )
};