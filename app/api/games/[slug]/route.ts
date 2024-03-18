import {NextResponse} from "next/server";
import { GAMES } from "@/utils/games";

//GET Single Game
export const GET = async (
    req: Request,
    { params }: { params: { slug: string}}) => {

    const { slug } = params;
    const game = GAMES.find(game => game.slug === slug)
    if (!game) {
        return NextResponse.json(new Error("Jeu introuvable"), {status: 404});
    }
    return NextResponse.json(game, {status: 200});
}