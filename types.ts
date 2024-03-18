export type Category = {
    id: number;
    name: string;
    slug: string;
    icon: string;
}

export type Game = {
    id: number;
    category: string;
    title: string;
    image: string;
    caption: string;
    price: string;
    slug: string;
}