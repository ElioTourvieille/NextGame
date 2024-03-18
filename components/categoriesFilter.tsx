"use client"

import * as React from "react"

import { CATEGORIES } from "@/utils/categories"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {useRouter} from "next/navigation";

const categories = CATEGORIES

export function CarouselFilter() {
    const router = useRouter()

    const handleCardClick = (slug: string) => {
        // Navigate to the category page
        router.push(`/categories/${slug}`)
    }

    return (
        <Carousel

            opts={{
                align: "start",
            }}
            className="w-full max-w-3xl flex gap-6"
        >
            <CarouselContent>
                {categories.map((category) => (
                    <CarouselItem key={category.id} className=" md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 hover:cursor-pointer hover:scale-105 " onClick={() => handleCardClick(category.slug)}>
                            <Card className="h-full">
                                <CardContent className="flex items-center aspect-square rounded-md justify-center p-6"
                                             style={{ backgroundImage: `url(/img/${category.icon}.jpg)`, backgroundSize: 'cover' }}>
                                    <span className="bg-gray-500 px-2 rounded-xl text-xl self-end text-white uppercase font-semibold">{category.name}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}