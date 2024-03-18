import { Game } from "@/types";
export const GAMES: Game[] = [
    {
        id: 1,
        category: "free-to-play",
        title: "Fortnite",
        image: "/img/fortnite.jpg",
        caption: "Affrontez d'autres joueurs dans ce jeu de survie en ligne.",
        price: "Gratuit",
        slug: "fortnite"
    },
    {
        id: 2,
        category: "action",
        title: "Call of Duty: Warzone",
        image: "/img/warzone.jpg",
        caption: "Plongez dans des batailles massives avec ce jeu de tir à la première personne.",
        price: "Gratuit",
        slug: "call-of-duty-warzone"
    },
    {
        id: 3,
        category: "adventure",
        title: "Uncharted 4: A Thief's End",
        image: "/img/uncharted.jpg",
        caption: "Partez à la recherche de trésors dans ce jeu d'action-aventure épique.",
        price: "CHF 19.99",
        slug: "uncharted-4"
    },
    {
        id: 4,
        category: "mmo",
        title: "World of Warcraft",
        image: "/img/wow.jpg",
        caption: "Plongez dans le monde fantastique d'Azeroth et affrontez d'autres joueurs.",
        price: "CHF 14.99/mois",
        slug: "world-of-warcraft"
    },
    {
        id: 5,
        category: "fps",
        title: "Counter-Strike: Global Offensive",
        image: "/img/csgo.png",
        caption: "Affrontez d'autres joueurs dans des matchs compétitifs intenses.",
        price: "Gratuit",
        slug: "counter-strike-global-offensive"
    },
    {
        id: 6,
        category: "rpg",
        title: "Final Fantasy XV",
        image: "/img/FF15.jpg",
        caption: "Explorez un monde fantastique et découvrez une histoire épique.",
        price: "CHF 39.99",
        slug: "final-fantasy-xv"
    }
];
