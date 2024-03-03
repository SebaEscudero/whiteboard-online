"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import { useUser } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogStructureProps {
    title: string;
    description: string;
    cta: string;
    img?: string;
}

export const BlogStructure = ({
    title,
    description,
    cta,
    img
}: BlogStructureProps) => {
    const { user } = useUser();

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
        <div className={`text-[#1c1c1e] font-normal pt-28 flex flex-col md:flex-row md:space-x-20 xl:space-x-30 ${img ? "lg:mx-[10%] mx-[5%] items-center md:text-left text-center" : "lg:mx-[25%] md:mx-[15%] mx-[5%] text-center space-y-5"}`}>
            <div className={cn(`space-y-5 flex-1`, {
                'text-4xl sm:text-5xl xl:text-6xl': img,
                'text-4xl sm:text-5xl md:text-6xl lg:text-7xl': !img,
            })}>
                <h1 style={{ lineHeight: "1.2" }}>
                    {title}
                </h1>
                <div className="bg-clip-text text-[#2E4DE6] leading-small">
                    <TypewriterComponent 
                        options = {{
                            strings: [
                                "Colabora.",
                                "Diseña.",
                                "Crea.",
                                "Enseña.",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="text-sm md:text-xl font-normal text-zinc-800 mx-auto">
                    {description}
                </div>
                <div>
                    <Link href={"/dashboard"}>
                        <Button variant="outline" className="md:text-lg p-4 md:p-6 font-normal">
                            {user ? "Ir a Tablero" : cta}
                        </Button>
                    </Link>
                </div>
                <div className="text-zinc-400 text-xs md:text-sm font-normal">
                    No se requiere tarjeta de crédito
                </div>
            </div>
            {img && imageElement}
        </div>
    )
}