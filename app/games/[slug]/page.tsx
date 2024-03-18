"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {useGame} from "@/hooks/useGame";

const GamePage = ({ params } :{ params: {slug:string}}) => {
    const {slug} = params
    const {game} = useGame(slug)

    return (
            <main className="mx-auto w-full max-w-7xl">
                <div className="h-full w-full flex flex-col justify-center px-8 py-24">
                    <div className="flex justify-between bg-secondary/80 p-8 rounded-lg">
                        <Image
                            className="rounded-lg"
                            // @ts-ignore
                            src={game?.image} alt={`image de ${game?.title}`} width={500} height={500}/>
                        <div className="flex flex-col justify-evenly items-center p-3">
                            <h1 className="text-4xl font-bold text-dark text-center sm:text-5xl dark:text-white">{game?.title}</h1>
                            <Badge variant="outline">
                                {game?.category.toUpperCase()}
                            </Badge>
                            <p className="text-lg text-center text-gray-600">{game?.caption}</p>
                            <div className="p-1 pr-6 flex gap-4 items-center justify-center bg-gray-700 rounded-lg">
                                <Button variant="outline" size="lg" className="">
                                    Ajouter au panier
                                </Button>
                                <span className="text-gray-200 shadow-sm">{game?.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

export default GamePage

