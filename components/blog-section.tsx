import Image from "next/image";
import { cn } from '@/lib/utils';

interface BlogSectionProps {
    title: string;
    text?: string;
    img?: string;
    side?: 'left' | 'right';
}

export const BlogSection = ({
    title,
    text,
    img,
    side = 'right',
}: BlogSectionProps) => {
    const imageElement = img && (
        <div className="flex-1 w-full border border-[#837D7C] rounded-sm">
            <Image
                src={img}
                alt="Logo"
                layout="responsive"
                width={10}
                height={10}
            />
        </div>
    );

    return (
        <div className={`flex flex-col lg:mx-[10%] mx-[5%] md:flex-row items-center my-10 font-normal md:space-x-20 xl:space-x-30 text-[#1c1c1e] ${!img && 'text-center'} ${side === 'left' && 'flex-col-reverse'}`}>
            {side === 'left' && imageElement}
            <div className="flex-1">
                <h1 className={cn("mb-10 leading-snug space-y-5", {
                    'text-2xl sm:text-3xl lg:text-4xl': text && img,
                    'text-4xl sm:text-5xl lg:text-6xl lg:mx-[15%] mx-[2%]': !img 
                })} style={{ lineHeight: "1.2" }}>
                    {title}
                </h1>
                {text && (
                    <p className={cn("sm:text-lg lg:text-xl text-[#1c1c1e] md:mb-0 mb-5", {
                        'lg:mx-[20%] mx-[2%]': !img
                    })}>
                        {text}
                    </p>
                )}
            </div>
            {side === 'right' && imageElement}
        </div>
    )
}