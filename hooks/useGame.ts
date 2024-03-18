import axios from "axios";
import { Game } from "@/types";
import {useEffect, useState} from "react";

export const getGameBySlug = async (slug:string) => {
    const {data} = await axios.get(`/api/games/${slug}`)
    return data as Game
}

export function useGame(slug: string) {
    const [game, setGame] = useState<Game | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            setIsLoading(true);
            try {
                const data = await getGameBySlug(slug);
                setGame(data);
            } catch (err) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) {
            fetchGame();
        }
    }, [error, slug]);

    return { game, isLoading, error };
}